import React from 'react'
import Me from '../assets/images/me_in_code.jpeg'

const About = (props) => {
  return (
    <div className="flex-col bg-black text-white p-5 h-screen">
      <h1 className="text-center text-5xl p-4 text-primary">About Me</h1>
      <div className="flex mt-8 justify-center items-center w-full">
        <div className=" w-2/4 flex gap-6 justify-center items-center flex-col ">
              <p className="text-justify font-extrabold pl-14 pt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            Vero atque nulla consequatur minima doloribus voluptatibus accusantium nesciunt modi fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            fugiat ut. Ad magnam, officiis porro neque id incidunt optio provident deleniti.
            </p>
            <button className="bg-primary p-1 font-bold w-36 rounded-md">Summary</button>
       </div>     
    <div className="flex w-2/4 justify-center items-center">
    <img src={Me} alt="me" />
            
        </div>
        </div>
    </div>
  )
}

export default About