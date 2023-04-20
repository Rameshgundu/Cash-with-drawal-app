// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, list, deductMoney} = props
  const {id, value} = denominationsList
  const findValue = () => {
    deductMoney(id, list)
  }
  return (
    <li>
      <button type="button" onClick={findValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
