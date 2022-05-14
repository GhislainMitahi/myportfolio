import {React, useState} from 'react';


const Projects = () => {
// states

const [mouse,setMouse] = useState(true)


//functions
// const handleMouse = () => {
//   setMouse(!mouse)
// }

  return (
    <div className="p-6 h-screen">
      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            <h1 class="text-center text-2xl p-4"> My done projects </h1>
  </span>
      <div className="flex justify-center gap-x-8">
      
      <div className="h-96 w-80 bg-cover bg-project-one bg-no-repeat bg-center rounded-md shadow-lg">
      <div className="h-96 w-80 bg-blue-450 opacity-50 rounded-md hover:opacity-0"></div>
      {mouse && (
        <div className="flex flex-col w-80 h-96 p-4 rounded-md text-white justify-around absolute top-3px">
        <h1 className="bg-primary text-2xl text-blue-450 text-center rounded-md z-50">DashbordAdmin</h1>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa ipsam eum consectetur a, deleniti, dolorum consequuntur distinctio earum quibusdam, saepe vero soluta rerum cumque. Vero voluptatum enim magnam rerum?</p>
        <p className="flex flex-row justify-around z-50">
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">HTM</a>
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">CSS</a>
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">javascript</a>
        </p>
      </div>)}
      </div>

  
      <div className="h-96 w-80 bg-cover bg-project-one bg-no-repeat bg-center rounded-md shadow-lg">
      <div className="h-96 w-80 bg-blue-450 opacity-50 rounded-md hover:opacity-0"></div>
      {mouse && (
        <div className="flex flex-col w-80 h-96 p-4 rounded-md text-white justify-around absolute top-3px">
        <h1 className="bg-primary text-2xl text-blue-450 text-center rounded-md z-50">DashbordAdmin</h1>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa ipsam eum consectetur a, deleniti, dolorum consequuntur distinctio earum quibusdam, saepe vero soluta rerum cumque. Vero voluptatum enim magnam rerum?</p>
        <p className="flex flex-row justify-around z-50">
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">HTM</a>
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">CSS</a>
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">javascript</a>
        </p>
      </div>)}
      </div>


      <div className="h-96 w-80 bg-cover bg-project-one bg-no-repeat bg-center rounded-md shadow-lg">
      <div className="h-96 w-80 bg-blue-450 opacity-50 rounded-md hover:opacity-0"></div>
      {mouse && (
        <div className="flex flex-col w-80 h-96 p-4 rounded-md text-white justify-around absolute top-3px">
        <h1 className="bg-primary text-2xl text-blue-450 text-center rounded-md z-50">DashbordAdmin</h1>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa ipsam eum consectetur a, deleniti, dolorum consequuntur distinctio earum quibusdam, saepe vero soluta rerum cumque. Vero voluptatum enim magnam rerum?</p>
        <p className="flex flex-row justify-around z-50">
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">HTM</a>
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">CSS</a>
          <a href="http//" className="bg-primary p-0.5 w-20 text-center rounded-md">javascript</a>
        </p>
      </div>)}
      </div>


    </div>
    </div>
  )
}

export default Projects