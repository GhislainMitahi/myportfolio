import {React, useState} from 'react';
import Project from './Project'
import pro1 from '../assets/images/todo.PNG'
import dashbord from '../assets/images/dashbord.PNG'
import trackar from '../assets/images/trackar.PNG'
import Popop from './Popop'
const Projects = () => {


const [popup,setPopup] = useState([])
const [show, setShow] =  useState(false)

const project1 = {
  imageSrc: pro1,
  titre: 'To do list',
  technolgies: ['React', 'Bootstrap', 'typeScript', 'redux'],
  id: 'firstProject',
  popupDescription: {
    imageSrc: pro1,
      titre: 'Add taskTo',
      technolgies: ['React','Bootstrap', 'typeScript', 'redux'],
      description: " This project was created with the aim to help people increase their productivity. The todo list app allows you to prioritize the tasks that are more important. It was built by implementing the four basic functions which are Create, Read, Update, and Delete(CRUD).",
      demoLink: 'https://tasklistghis.netlify.app/',
      source: 'https://github.com/GhislainMitahi/tasksAttr/tree/main',
  },
};
const project2 = {
  imageSrc: dashbord,
  titre: 'Admin Dasboard',
  technolgies: ['css', 'javascript', 'html'],
  id: 'secondProject',
  popupDescription: {
      imageSrc: dashbord,
      titre: 'Admin Dasboard',
      technolgies: ['css', 'javascript','html'],
      description: "The admin dashboard project was created for three main purposes which are analytic(to identify historical trends, establish targets, predict outcomes, and/or discover insights), operational (to monitor, measure and manage processes in real-time), and strategic (to track key performance indicators (KPIs) and process towards established targets)",
      demoLink: 'https://admindashboardghis.netlify.app/',
      source: 'https://github.com/GhislainMitahi/AdminDashboard',
  },
};
const project3 = {
  imageSrc: trackar,
  titre: 'Task Tracker',
  technolgies: ['React','css','html'],
  id:'thirdProject',
  popupDescription: {
    imageSrc: trackar,
      titre: 'Add task',
      technolgies: ['React','CSS','HTML'],
      description: " The task tracker project help people to list everything that they have to do on a given time by setting a reminder in case they forget about the task. By keeping such a list, a person makes sure that his/her tasks are written down all in one place so he doesn't forget anything important.",
      demoLink: 'https://tasktrackergh.netlify.app/',
      source: 'https://github.com/GhislainMitahi/tasktracker/',
  },
};
const projects = [project1,project2,project3]
const handleClick = (key) => {
  setPopup(
    projects.filter((modal)=>modal.id === key ? {...modal}:false)
  )
  setShow(true)
}
const handleShow = () => {
  setShow(false)
}
if(show){
  document.body.classList.add('overflow-hidden')
}else{
  document.body.classList.remove('overflow-hidden')
}
  return (
    <>
    {show &&(
      <Popop handleshow={handleShow} popup={popup}/>
  )}
<div className="mainP md:p-6 h-auto md:w-auto border-black" id="project">
            <h1 class="text-center md:text-2xl p-4 mb-8"> My done projects </h1>
      <div className=" md:flex flex-wrap md:justify-center md:gap-x-8 h-auto mb-8">
      {projects.map((work,key)=>(
          <Project 
          key={key}
          id={work.id}
          image={work.imageSrc}
          titre={work.titre}
          tech={work.technolgies}
          handleClick={handleClick}
        />
      ))}
    </div>
    </div>
    </>
  )
}
export default Projects