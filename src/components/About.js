import React from 'react'
import Me from '../assets/images/me_in_code.jpeg'

const About = (props) => {
  return (
    <div className="flex bg-black text-white p-5 h-screen gap-4">
       <div className="w-2/4 flex justify-around items-center flex-col ">
       <h1 className="text-center text-5xl">About Me</h1>
            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti</p>
            <button className="bg-primary p-2 w-36 rounded-md">summary</button>
       </div>     
    <div className="flex w-2/4 justify-center items-center">
    <img src={Me} alt="me" />
            
        </div>
    </div>
  )
}

export default About