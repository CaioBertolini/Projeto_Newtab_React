import React, { useState } from "react";
import axios from 'axios';
import "./user.css";

export default function User(){

    const [usuario, setUsuario] = useState([]);

    axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
      .then(res => {
        const person = res.data;
        setUsuario(person);
    })

    return(
        usuario.map((item) =>
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
                    <button>Pagar</button>
                </div>
            </div>
        )
    )
}