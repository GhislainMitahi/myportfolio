import React from 'react'
import Profil from "./Profil"
import Maingif from "../assets/images/gif.gif"

 const Header = (props) => {
  return (
    <div className="bg-blue-450 w-full h-screen text-white  flex items-center">
      <Profil gif={Maingif} data={props.data}/>
    </div>
  )
}

export default Header