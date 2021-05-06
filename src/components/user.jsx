import React, { useState } from "react";
import axios from 'axios';
import "./css/user.css";

export default function User(){

    const [usuario, setUsuario] = useState([]);

    axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
      .then(res => {
        const person = res.data;
        setUsuario(person);
    })

    const [modalIsOpen, setModalIsOpen] = useState("none");

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen("block")
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen("none")
    }

    let cards = [
        // valid card
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },
        // invalid card
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
      ];

    return(
        <>
            {usuario.map((item) =>
                <div className="usuarios">
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
                        <button onClick={setModalIsOpenToTrue}>Pagar</button>
                    </div>
                </div>
            )}
            
            {/* Modal de pagamaneto */}
            <div className="display-pay" style={{display: modalIsOpen}}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <div className="modal-showing">
                    <span>Pagamento para Nome do Usuário</span>
                    <input type="number" placeholder="R$ 0,00" required/>
                    <select>
                        <option value="1">Cartão com final {cards[0].card_number.substr(-4)}</option>
                        <option value="2">Cartão com final {cards[1].card_number.substr(-4)}</option>
                    </select>
                    <button>Pagar</button>
                </div>
            </div>
        </>
    )
}