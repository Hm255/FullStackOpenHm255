const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}


const Content = (props) =>{
  return (
    <div>
     <Part part={props.part1} exercises={props.exercises}/>
     <Part part={props.part2} exercises={props.exercises2}/>
     <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}


const Total = (props) =>{
  return(
    <div>
      <p>
  {props.exercises1 + props.exercises2 + props.exercises3}
  </p>
  </div>
  )
  }


const App = () => {
  const course = 'half stack application development'

  const part1 = { 
    name: 'Fundamentals of React',
    exercises:  10
}

  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }

  const part3 = {
  name: 'State of a component',
  exercises: 14
  }

  console.log(part1, part2, part3)
  return (
   <>
    <Header course={course}/>
    <Content
    part1={part1} exercises={part1.exercises}
    part2={part2} exercises2={part2.exercises}
    part3={part3} exercises3={part3.exercises}
    />
    <Total
    exercises1={part1.exercises}
    exercises2={part2.exercises}
    exercises3={part3.exercises}/>
   </>
  )
}

export default App