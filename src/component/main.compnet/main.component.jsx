import './main.tyle.css'
import { useEffect } from 'react'
import { Rest } from '../../context/context'
import { useContext } from 'react'
const Main=()=>{
  const {dataget,setWeatheState,WeatheState}=useContext(Rest)
  
  const {temp,pressure,humidity,speed,main,name,country,sunset}=dataget

  let sec=sunset
  const c= new Date(sec *1000)
  const time=`${c.getHours()}:${c.getMinutes()}`




  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setWeatheState(" wi wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState(" wi wi-fog");
          break;
        case "Clear":
          setWeatheState(" wi wi-day-sunny");
          break;
        case "Mist":
          setWeatheState(" wi wi-dust");
          break;

        default:
          setWeatheState(" wi wi-day-sunny");    
          break;
      }
    }
  }, [main]);



  console.log(WeatheState)


    return(
        <div className='parentwidget'>
  <div className="widget">
    <div className='widgeticon'>
      <span className={WeatheState}></span>
    </div>
    <div className='widgetmiddel'>
      <div className='data'>
        <div className='tempnumber'>
          <br/>
          <span className='digit'>{temp}&deg;</span>
        </div>
        <div className='text'>
          <div style={{marginTop:"15px",textAlign:"left"}}>
            <span className='clouds'>{main}</span><br/>
            <span className='city'>{name},{country}</span>
          </div>
        </div>
      </div>
      <div className='time'>
        <br/>
        <span className='tdate'>{new Date().toLocaleString()}</span>
      </div>
    </div>
    <div className='fourdivparent'>
        <div className='fstdiv'>
        <div className='fstdivfeild'>
          <p>
          <i className={"wi wi-sunset"}></i>
          </p>
        </div>
        <div className='fstdivtext'>
           {time} PM<br/>
             Sunset
          </div>
        </div>
        <div className='fstdiv'>
        <div className='fstdivfeild'>
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
        </div>
        <div className='fstdivtext'>
            {humidity}<br/>
             Humidity
          </div>
        </div>
        <div className='fstdiv'>
        <div className='fstdivfeild'>
          <p>
            <i className={"wi wi-rain"}></i>
          </p>
        </div>
        <div className='fstdivtext'>
            Pressure<br/>
             {pressure}
          </div>
        </div>
        <div className='fstdiv'>
        <div className='fstdivfeild'>
          <p>
            <i className={"wi wi-strong-wind"}></i>
          </p>
        </div>
        <div className='fstdivtext'>
            wind<br/>
             {speed}
          </div>
        </div>

    </div>
  </div>
</div>
    )
}
export default Main