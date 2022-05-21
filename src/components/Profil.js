import React from 'react'
import { BsLinkedin,BsStackOverflow,BsTwitter} from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";


const Profil = (props) => {
  
  return (
    <div  id="portofolio">
    <div className="flex items-center h-screen w-screen profil" id="main_page">
   <div class="md:ml-4 md:w-1/6 md:items-start md:flex-col icons">

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
<div className="w-2/5 items-center text-lg intro">
<h1 className="text-red text-2xl titre ">Hello, I'm <span className="underline ">{props.data.firstName} {props.data.lastName}</span></h1>
  <p className="tracking-wider texts">I'm an experienced full-stack web developer, in love with pair programming and teamwork. I'm also an  open-source enthusiast with a love for clean code and accessible design. 
Fluent in multiple languages, frameworks, and technologies, and capable of ramping up quickly and efficiently and mentoring junior developers.</p>
</div>
 <div class="w-2/5 items-center photo">
  <img src={props.gif} alt="gif"/>
</div>
</div>
  </div>
  )
}

export default Profil