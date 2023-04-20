import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithDrawal extends Component {
  state = {availableBal: 2000}

  deductMoney = (id, list) => {
    const requiredValue = list.filter(eachNote => eachNote.id === id)
    console.log(requiredValue[0].value)
    this.setState(prevState => ({
      availableBal: prevState.availableBal - requiredValue[0].value,
    }))
  }

  render() {
    const {availableBal} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="sub-container">
          <div className="user-details-container">
            <div className="user-icon">
              <p>S</p>
            </div>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="available-bal-container">
            <p className="balance-head">Your Balance</p>
            <div>
              <p className="display-money">{availableBal}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <p className="with-draw-heading">Withdraw</p>
            <p className="sum-heading">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="notes-container">
            {denominationsList.map(eachNote => (
              <DenominationItem
                denominationsList={eachNote}
                key={eachNote.id}
                deductMoney={this.deductMoney}
                list={denominationsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithDrawal
