import { useState } from 'react'

const StatisticLine = ({text,value}) => {
  return(
  <div>{text}  {value}</div>    
  )
}
const Stat = (props) => {

  const all=props.allpoll.length
  
  if (all===0){
    return (
    <div>
      <h2>  statistic   </h2>

      <li>No feedback given</li>
    </div>
    )
  }  
  const g=props.good;
  const n=props.neutral;
  const b=props.bad;
  return(
   <div>
    <h2>  statistic   </h2>
    <table> 
    <tr>
      <td><h3>Opinions</h3></td>
      <td><h3>polls</h3></td>
      <td><h3>averages</h3></td>
    </tr>
    <tr>
      <td><StatisticLine text="good" /></td>
      <td><StatisticLine value ={g}/></td>
      <td> {(g/all).toFixed(2)}</td>
    </tr>
    <tr>
      <td><StatisticLine text="neutral" /></td>
      <td><StatisticLine value ={n}/></td>
      <td> {(n/all).toFixed(2)}</td>
    </tr>
    <tr>
      <td><StatisticLine text="bad" /></td>
      <td><StatisticLine value ={b}/></td>
      <td> {(b/all).toFixed(2)}</td>
    </tr>



    
    <li>total poll  {all}</li>
    <li>positive  {((g*100)/all).toFixed(2)} %</li>
    </table>
   </div>
    
  )
}
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
    
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allpoll, setAllpoll] = useState([])

  const handleGoodClick = () => {
    setAllpoll(allpoll.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAllpoll(allpoll.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAllpoll(allpoll.concat('B'))
    setBad(bad + 1)
  }


  
  return (
    <div>
      <h1> give feedback </h1>

      <Button onClick={handleGoodClick} text= 'good' />
      <Button onClick={handleNeutralClick}  text='neutral'/>
      <Button onClick={handleBadClick}  text= 'bad'/>

      <Stat allpoll={allpoll} good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App;
