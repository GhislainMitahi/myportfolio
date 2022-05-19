import React from 'react'
import { BsLinkedin,BsStackOverflow,BsTwitter} from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";


const Profil = (props) => {
  
  return (
    <div className="sm:flex sm:items-center h-auto w-screen">
    <div class="w-2/5 items-center">
  <img src={props.gif} alt="gif"/>
  
</div>
<div className="w-2/5 items-center sm:text-sm md:text-lg">
<h1 className="text-red sm:text-xl md:text-2xl">Hello you all, I'm <span className="underline ">{props.data.firstName} {props.data.lastName}</span></h1>
  <p className="tracking-wider md:text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illum nulla distinctio, voluptas cumque natus, quis obcaecati tempora voluptates corrupti veniam dolores corporis magnam et qui! Id natus blanditiis eligendi?</p>
</div>
<div class="flex w-1/6 md:items-end flex-col">

<a href="https://www.linkedin.com/in/ghislain-mitahi/" className="p-2">
   <BsLinkedin/>
</a>
<a href="https://stackoverflow.com/users/15553276/ghislain-mitahi" className="p-2">
    <BsStackOverflow/>
</a>
<a href="https://twitter.com/GMitahi" className="p-2">
    <BsTwitter/>
</a>
<a href="https://github.com/GhislainMitahi" className="p-2">
    <GoMarkGithub/>
</a>
</div>
  </div>
  )
}

export default Profil