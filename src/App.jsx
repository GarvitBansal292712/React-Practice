import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Card from "./components/Card";
import { useEffect, useState } from "react";
function App() {
  // const [count, setCount] = useState(0);
  // const [btn, setBtn] = useState(true)
  // const [todos, settodos] = useState([]);

  // const [card, setcard] = useState([])
  
// const fetchData = async () =>{
//   let a = await fetch('https://jsonplaceholder.typicode.com/posts')
//   let data = await a.json()
//   setcard(data)
//   console.log(data)
// }

//   useEffect(() => {  
//      fetchData()
//   }, [])
  
const [click, setclick] = useState(0)

// const [name, setName] = useState("Garvit")

const [form, setForm] = useState({email: "", phone: ""})
 
const clickHandler = () =>{
  alert("The button has been clicked!")
}

 
const mouseHandler = () =>{
  alert("The button has been hovered!")
}

 
const changeHandler = (e) =>{
  
  setForm({...form, [e.target.name]:e.target.value})
  console.log(form)
}
  return (
    <>
      <Navbar />


      <button onClick={clickHandler}>Click me to activate a event listener</button>
      {/* <button onMouseOver={mouseHandler}>Mouse over me to activate a event listener</button> */}
      <input type="text" /* name="" id="" */ value={name}onChange={changeHandler} />
      <input type="text" name="email" placeholder="enter mail " value={form.email}onChange={changeHandler} />
      <input type="number" name="phone" placeholder="enter phone " value={form.phone}onChange={changeHandler} />
      {/* <div className="container">
        
          {card.map((card)=>{
            return <div key={card.id} className="card">
              <h1>Card Title:{card.title}</h1>
              <p>{card.body}</p>
              <span>UserId:{card.userId}</span>
            </div>
          })}
          </div> */}
      <Footer />
      {/* {todos.map((todo) => {
        return <Todo key={todo.title} todo={todo} />;
      })} */}
    </>
  );
}

export default App;
