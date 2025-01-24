import Blog from "../Blog"
import Table from "../table"
import Comp from "./comp1"
import Events from "../events"
import { Conditionals } from "./conditionals"
import { useState } from "react"
import { Theme } from "./theme"
import { Controlled } from "./Controlled"
import { Signup } from "./Signup"
import Comp2 from "../Comp2"
import LifeCycle from "./LifeCycle"
import Time from "./time"
import Effect from "./Effect"
import News from "./News"
import Counter from "./Countuseeffect"
import Redux from "./useReducer"
import FormRedux from "./Formreducer"
function App() {
  let data1 = ['Dsa','Cpp']
  const [inputVal, setInputVal] = useState("");
  const[light, setTheme] = useState(true);
  function handleClick(e) {
    setInputVal(e.target.value)
    console.log(e.target.value)
  }
  function handletheme() {
    setTheme(!light);
    document.body.style.backgroundColor = !light ? "white" : "black";
  }
  

  return (
    <>
    {/* <div className="App">
      <Blog fname = "Surya"></Blog>
      <Blog salary = "1222332" ></Blog>
      <Blog skills={data1} ></Blog>
      <Table></Table>
    </div>
    <div>
      <Comp fname = "surya"></Comp>
      <Events></Events>
      <input onChange={handleClick} style={{margin : 5}}></input>
      <button >Submit</button>

      <Conditionals.MissedGoal/>
      <Conditionals.MadeGoal/>
      <Conditionals.Goal val={false}/>
      <button style={{backgroundColor : light ? "black" : "white",color : light ? "white" : "black"}} onClick={handletheme}> Change</button>
      <Theme.Changetheme val = {light}/>
      <Controlled></Controlled>
    </div>
     */}
     
      <div>
       {/* <Signup></Signup> */}
        {/* <Comp2 fname = "sai"></Comp2>
        <LifeCycle firstname = "Suryaaaaa"></LifeCycle>
        <Time timenow ></Time> */}
        {/* <Effect></Effect> */}
          {/* <News></News> */}
          {/* <Counter></Counter> */}
          {/* <Redux></Redux> */}
          <FormRedux></FormRedux>
      </div>
     
    </>
  )
}

export default App
