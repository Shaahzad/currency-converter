import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [value,setValue]= useState(0)
const [from, setFrom] = useState()
const [to, setTo] = useState()
const [convert , setConvert] = useState(0)

useEffect(()=>{
  fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${from}&to=${to}`)
  .then((res) => res.json())
  .then((data) => setConvert(data.rates[to]))
  if(from === to){
    setConvert(value)
  }
  
},[value,from,to])
  return (
    <div className='main'>
    <input type='text' placeholder='Enter text' className='input' onChange={(e)=>setValue(Number(e.target.value))}/>
    <div className='currency'>
      <select onChange={(e)=>setFrom(e.target.value)} className='select'>
        <option>AUD</option>
        <option>BGN</option>
        <option>BRL</option>
        <option>CAD</option>
        <option>CHF</option>
        <option>CNY</option>
        <option>USD</option>
        <option>HUF</option>
        <option>CZK</option>
        <option>INR</option>
      </select>
      <select onChange={(e)=>setTo(e.target.value)} className='select'>
        <option>AUD</option>
        <option>BGN</option>
        <option>BRL</option>
        <option>CAD</option>
        <option>CHF</option>
        <option>CNY</option>
        <option>USD</option>
        <option>HUF</option>
        <option>CZK</option>
        <option>INR</option>
      </select>
    </div>
    <h1>{convert} {to}</h1>
    </div>

  )
}

export default App
