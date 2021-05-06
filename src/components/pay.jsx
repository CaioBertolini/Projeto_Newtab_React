import React  from 'react'
import "./css/pay.css"

export default function Pay(){

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
        <form action="" method="post">
          <div className="modal-showing">
            <span>Pagamento para Nome do Usuário</span>
            <input type="number" placeholder="R$ 0,00" required/>
              <select>
                  <option value="1">Cartão com final {cards[0].card_number.substr(-4)}</option>
                  <option value="2">Cartão com final {cards[1].card_number.substr(-4)}</option>
              </select>
              <button>Pagar</button>
          </div>
        </form>
    )
}