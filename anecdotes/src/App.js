import { useState } from 'react'

let textlen=0
let anecdoteRamdon=0
let maxvote=0
var mostvote=0
const Button = (props) => {
    
   
  return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
  )
}
    


const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setpoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })
  const [pointsmax, setpointsmax]=useState(0) 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  //const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

  //const anecdotesO = Object.assign({}, anecdotes)
  //console.log(anecdotesO)
  //const anecdotes6={}
  //const anecdotes3 =Object.assign({},...anecdotes,...anecdotes1)
  //const anecdotes3 ={...anecdotes,anecdotes1}
  //anecdotesO[0].vote=1
  //anecdotesO[0]= '1
  //Object.defineProperty(anecdotes6,'vote',{value:0},'name',{value:''})

  //anecdotes6={...anecdotesO}
  //console.log(anecdotes6)

  //anecdotes1 = Object.assign({}, anecdotes)
  //console.log(anecdotes1)

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return anecdoteRamdon=Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  const handleNextClick = () => {
    setSelected(randomNumberInRange(0, textlen-1))
    
  }
 
  const handleVoteClick = () => {
    const copy = { ...points }
      // increment the property 2 value by one
      copy[anecdoteRamdon] += 1  
      setpoints(copy)
      //console.log(a)
    console.log(points)
      //const copymax = Object.assign({}, copy)
      //console.log(Math.max(copy))
      //var b=copy.reduce(function(a,b) {return Math.max(a, b)})
      //var b= Math.max(...copy.map(o => o.y))
      
      //console.log(mostvote,maxvote)
   
      const copy2 = { ...points }
      maxvote= copy2[pointsmax]
      for (var n=0; n < 7; n++)
            if (copy2[n] > maxvote){
        console.log(n)  
        maxvote = copy2[n]
        mostvote=n}
   
   //const a=max()
  //setpointsmax(a)
      console.log(mostvote)
      setpointsmax(mostvote)
  }

    
  textlen=anecdotes.length 
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <li>{anecdotes[selected]}</li>
      <button onClick={handleVoteClick} >
      vote
      </button>
      <button onClick={handleNextClick} >
      next anecdote
      </button>
      <h1>Anecdote {pointsmax} has the most votes  </h1>

      <li>{anecdotes[pointsmax]}</li>
      <li>has {points[pointsmax]} votes</li>

    </div>
  )
}

export default App;
