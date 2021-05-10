import React, { useState } from "react";
import axios from 'axios';
import "./css/user.css";
import NumberFormat from 'react-number-format';

export default function User(){

    // Consumo da API para listar usuários
    const [usuario, setUsuario] = useState([]);
    axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
      .then(res => {
        const person = res.data;
        setUsuario(person);
    })

    // Lista dos cartões
    let cards = [
        // cartão valido
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },
        // cartão invalido
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
      ];
    
    // Função para detectar modificação e resgatar valor no selection
    function handleChange(event){
        setValueCards(event.target.value);
    }

    // Constante de ação dos modals
    const [payIsOpen, setPayIsOpen] = useState("none"); // Constante para abrir pagamento
    const [listTransp, setListTrasnp] = useState("flex"); // Constante para esconder lista
    const [payName, setPayName] = useState(""); // Constante para pegar nome usuário
    const [resulOpen, setResulOpen] = useState("none"); // Constante para abrir recebimento
    const [negativeOpen, setNegativeOpen] = useState(""); // Constante para mostrar o não do recebimento
    const [valueCards, setValueCards] = useState("1"); // Constante para valor do selection
    const [valueMoney, setValueMoney] = useState(""); // Constante para valor do dinheiro
    const [requiredCamp, setRequiredCamp] = useState("none"); // Constante para validação de campo

    // Abrir o modal de pagameto
    function modalPayOpen (name) {
        setPayIsOpen("flex")
        setListTrasnp("none")
        setPayName(name)
    }

    // Função para filtrar o valor do dinheiro
    function inputChange(e){
        setValueMoney(e.target.value);
        setRequiredCamp("none");
    }

    // Abrir o modal de recibo de pagamento
    function modalResulOpen (){
        if (valueMoney === ""){
            setRequiredCamp("flex");
        }
        else{
            if (valueCards === "1"){
                setNegativeOpen("");
            } else{
                setNegativeOpen("não");
            }
            setPayIsOpen("none");
            setResulOpen("flex");
            setValueMoney("");
            setRequiredCamp("none");
        }
        
    }
    
    // Fechamento do modal de recibo de pagamento
    function modalResulClose () {
        setResulOpen("none");
        setListTrasnp("flex");
    }

    return(
        <>
            {/* Listagem de usuários */}
            {usuario.map((item) =>
                <div className="usuarios" style={{display:listTransp}}>
                    <div className="img-usuario">
                        <img src={item.img} alt="Imagem usuário"/>
                    </div>
                    <div className="identi-usuario">
                        <div>
                            Nome: {item.name}
                        </div>
                        <div>
                            ID: {item.id} - Username: {item.username}
                        </div>
                    </div>
                    <div className="botao-pagar">
                        <button onClick={()=>{modalPayOpen(item.name)}}>Pagar</button>
                    </div>
                </div>
            )}
            
            {/* Modal de pagamaneto */}
            <div className="modal-showing" style={{display: payIsOpen}}>
                <span>Pagamento para <b>{payName}</b></span>
                <div className="input-money">
                    <NumberFormat thousandSeparator={true} value={valueMoney} onChange={inputChange} prefix={'R$ '} inputmode="numeric"/>
                    <p style={{display:requiredCamp}}>Campo obrigatório</p>
                </div>
                <select value={valueCards} onChange={handleChange}>
                    <option value="1">Cartão com final {cards[0].card_number.substr(-4)}</option>
                    <option value="2">Cartão com final {cards[1].card_number.substr(-4)}</option>
                </select>
                <button onClick={()=>{modalResulOpen ()}}>Pagar</button>
            </div>

            {/* Modal de recibo de pagamento */}
            <div className="modal-showing" style={{display: resulOpen}}>
                <span>Recibo de pagamento</span>
                <p>O Pagamento <strong>{negativeOpen}</strong> foi concluido com sucesso</p>
                <button onClick={()=>{modalResulClose()}}>Fechar</button>
            </div>
        </>
    )
}