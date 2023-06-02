import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import styles from './advice.module.scss'

function App() {
  const [slip,setSlip]=useState(null)
  const [isRefreshing,setIsRefreshing]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()


    const fetchAdvice = async () => {
      setIsRefreshing(true)
      try{
        const response= await axios.get('https://api.adviceslip.com/advice')
        setSlip(response.data.slip);
        setIsLoading(false)
      }
      catch(error){
        console.error('Error fetching data', error);
        setIsLoading(false)
      }
      setIsRefreshing(false)
    }
    useEffect(()=>{
      fetchAdvice();
    },[])

    const logout = () => {
      navigate('/')
    }

  return (
    <div className={styles.main}>
      
      {isLoading ? (
            <div className={styles.loader}>
            </div>
          ) : (
          <div className={styles.main}> 
          <button className={styles.logout} onClick={logout}>Back</button>
            <div className={styles.advicebox}>
              {slip && (
              <>
                <h5>ADVICE #{slip.id}</h5>
                <p key={slip.id}  >"{slip.advice}"</p>
              </>
            )}
              <img src="pattern-divider-desktop.svg" alt="" />
              </div>
              <button className={styles.rando} onClick={()=>fetchAdvice()} disabled ={isRefreshing}> <img src="icon-dice.svg" alt="Advice Randomizer" /></button>
              <p className={styles.more}>Click button for more</p>
          </div> 
          )}
    </div>

  )
}

export default App;
