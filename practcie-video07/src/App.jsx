import './App.css'
import Card from './component/Card'
function App() {
let obj={
  name:"ibad",
  work:"student",
  age:21,
}
  return (
    <>
<div>
  < h1 className='bg-green-500 text-white-500 rounded-md  font-bold p-2 mb-2'>Tailwind CSS</h1>
<Card  someobj={obj} btn="click me "/>
<Card headingName="BULLET TRAIN"/>
</div>
    </>
  )
}

export default App
