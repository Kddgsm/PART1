
const Header = (props) => {
  console.log(props)
  return(
    <h1>
    {props.course.name}
    </h1> 
   )
}
const Content = (props) => {
  console.log(props)
    return (
      <div>
       <li>
        {props.course.parts[0].name}   exercises   {props.course.parts[0].exercises}
      </li>
       <li>
       {props.course.parts[1].name}    exercises   {props.course.parts[1].exercises}
       </li>
       <li>
       {props.course.parts[2].name}    exercices    {props.course.parts[2].exercises}
       </li>
      </div>
    )
}

const  Total = (props) => {
  let b=0
  b=parseInt(props.course.parts[0].exercises)+parseInt(props.course.parts[1].exercises)+parseInt(props.course.parts[2].exercises)
  console.log(b)
  
  //parseInt({props.course.parts[1].exercises})+parseInt({props.course.parts[2].exercises})
  return (
    <h2>
     Total exercises {b}
    </h2>
  )
}

const App = () => {
  //let a=0
  const course = {
      name:'Half Stack application development',
      parts: [
        {
        name: 'Fundamentals of React',
        exercises: 10
      },
        {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
      exercises: 14
      }
      ]
    }
    
    //a=parseInt(course.parts[0].exercises)+parseInt(course.parts[1].exercises)+parseInt(course.parts[2])   
    //console.log()
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
	    <Total course={course}  />
    </div>
  )
}

export default App
