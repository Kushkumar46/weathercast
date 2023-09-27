import { useEffect } from 'react'
import './nav.style.css'
import {Rest} from '../context/context'
import { useContext } from 'react'
const Nav = () => {

 const {inputsearch, setinputsearch,setdataget}=useContext(Rest)
 

 const searchcall=async()=>{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputsearch}&units=metric&appid=73496d5b3fc305194b575e287f48422f`
   try{
      const aa=await fetch(url)
      const yesget=await aa.json()
      console.log(yesget)

      const {temp, pressure,humidity}=yesget.main
      const {speed}=yesget.wind
      const {main}=yesget.weather[0]
      const{name, timezone}=yesget
      const { country, sunset } = yesget.sys;

      const obj={
        temp,
        pressure,
        humidity,
        speed,
        main,
        name,
        country,
        sunset
      }

   
let s=timezone
const a=new Date(s)
console.log(a.getDay())
      setdataget(obj)

   }catch(error){
      alert('PLZ MENTION CORRECT CITY NAME ❤️')
   }

 }

  useEffect(()=>{
    searchcall()
  },[])



  return (
    <div className="navparent">
      <div className="inputadd">
        <input className='inputs' onChange={(e)=>setinputsearch(e.target.value)} value={inputsearch} placeholder="Search Me..." text="search"></input>
      </div>
      <div className="buttonadd">
        <button className='buttons' onClick={()=>searchcall()}>Search</button>
      </div>
    </div>
  )
}
export default Nav