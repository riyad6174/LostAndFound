import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const key =localStorage.getItem("key")
    const [logged, setlogged] = useState(false)
    if(key){
       
        setlogged(true)
    }
  return (
    logged?children:<Navigate to="/login"/>
  )
}

export default PrivateRoute