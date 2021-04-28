import React from "react"
import "./user.css"

var usuario = [
    {
        id: 1001,
        name: "Eduardo Santos",
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        username: "@eduardo.santos"
    }
]


export default function User(){
    return(
        usuario.map((item, key) =>
            <div className="usuarios">
                <div>
                    <img src={item.img} />
                </div>
                <div>
                    <div>
                        Nome: {item.name}
                    </div>
                    <div>
                        ID: {item.id} - Username:{item.username}
                    </div>  
                </div>
                <div>
                    <button>Pagar</button>
                </div>
            </div>
        )
    )
}