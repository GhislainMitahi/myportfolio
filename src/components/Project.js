import React from 'react'
import { BsEye } from "react-icons/bs";



const Project = (props) => {
  return (

<div className="md: h-96 w-80 rounded-md shadow-lg">
        <div className="h-2/4"><img src={props.image} alt="#" className="rounded-t-md h-full w-full"/></div>
        <div className="h-2/5 bg-blue-450 flex flex-col justify-around text-white p-2"> 
        <h1 className="text-center text-xl">
        {props.titre}
        </h1>
        <p className="flex justify-around">
          <a href="http//" className="bg-primary p-1 w-24 text-center rounded font-bold">{props.tech[0]}</a>
          <a href="http//" className="bg-primary p-1 w-24 text-center rounded font-bold">{props.tech[1]}/</a>
          <a href="http//" className="bg-primary p-1 w-24 text-center rounded font-bold">{props.tech[2]}/</a>
        </p>
        </div>
        <div className="h-12 bg-blue-450 rounded-b-md flex items-center place-content-center text-white text-xl border-t border-gray-200 hover:bg-primary hover:text-white transition duration-200 ease-out hover:ease-in" onClick={()=>props.handleClick(props.id)}>
        <p className="p-2 text-2xl"><BsEye/></p>
        <p>See the project</p> 
        </div>
      </div>
  )
}

export default Project