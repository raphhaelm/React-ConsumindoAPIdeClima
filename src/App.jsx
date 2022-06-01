import { useState, useEffect } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'

function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState([]);
  // useEffect(()=>{
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=473f55a2af1238a78e36f132ea3f6297`)
  //   .then((res)=> setClima([res.data]))

  // }, [])
 const novaBusca = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=473f55a2af1238a78e36f132ea3f6297`)
    .then((res)=> setClima([res.data]))

  }
  console.log(clima);
  


  return (
    <div className="App">
      <section>
        <form >
        <label htmlFor="">Nome da Cidade: </label> <br />
        <input type="text" value={cidade} onChange={(e)=> setCidade(e.target.value)} /> <br /><br />
        <button type='button' onClick={(e)=> novaBusca()}>🔎</button>
      </form>
      <div>
        <h2>o clima de {cidade} é : </h2>
        {clima.map((el) => {
          return <h1 key={el.weather[0].main}> {el.weather[0].main}</h1>
        })}
      </div>
      </section>
    
    </div>
  )
}

export default App
