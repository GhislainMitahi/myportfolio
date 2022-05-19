import React from 'react'
import Me from '../assets/images/me_in_code.jpeg'

const About = (props) => {
  return (
    <div className="flex-col bg-black text-white p-5 h-screen about">
      <h1 className="text-center text-5xl p-4 text-primary titre-about">About Me</h1>
      <div className="flex mt-8 justify-center items-center w-full content-about">
        <div className="text-about md:w-2/4 flex gap-6 justify-center items-center flex-col ">
              <p className="md:text-start  text-l md:pl-14 pt-10 ">
I've spent several months completely immersed in remote development, where I build projects from scratch(design, frontend, and backend). I’m a fast learner and I’m in love with working in the web development industry. The way to deal with real problems, solve challenges and learn new things every day are attractive points in this industry. Being creative also.

I started to learn programming in 2020 and now I’m feeling comfortable using different languages(HTML, CSS, JavaScript, React, and Node.js), frameworks, and APIs. I'm really proud of my progress and my achievement, including a To-do list app, an admin dashboard, and a markdown app
            </p>
            <a href="https://docs.google.com/document/d/1X5HAyqA6-FzeY7zD1-Ix8oOUa_THIBZpHp9K3CKkbRA/edit?usp=sharing" className="bg-primary p-1 font-bold w-36 rounded-md text-center">Summary</a>
       </div>     
    <div className="flex w-2/4 justify-center items-center image">
    <img src={Me} alt="me" />
            
        </div>
        </div>
    </div>
  )
}

export default About