import {React, useState} from 'react';
import Project from './Project'
import pro1 from '../assets/images/todo.PNG'
import dashbord from '../assets/images/dashbord.PNG'
import Popop from './Popop'
const Projects = () => {

// states and declaratiio

const [popup,setPopup] = useState([])




const [show, setShow] =  useState(false)



const project1 = {
  imageSrc: pro1,
  titre: 'Multi-Post Stories <br> Gain+Glory',
  technolgies: ['React', 'Bootstrap', 'typeScript', 'redux'],
  id: 'firstProject',
  popupDescription: {
    imageSrc: pro1,
      titre: 'Add task',
      technolgies: ['React', 'Bootstrap', 'typeScript', 'redux'],
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://ciraganenicole.github.io/Portfolio/',
      source: 'https://github.com/ciraganenicole/Portfolio',
  },
};

const project2 = {
  imageSrc: dashbord,
  titre: 'Multi-Post Stories <br> Gain+Glory',
  technolgies: ['css', 'javascript', 'html'],
  id: 'secondProject',
  popupDescription: {
      imageSrc: dashbord,
      titre: 'DashBord',
      technolgies: ['css', 'javascript', 'html'],
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://ciraganenicole.github.io/Portfolio/',
      source: 'https://github.com/ciraganenicole/Portfolio',
  },
};

const project3 = {
  imageSrc: pro1,
  titre: 'Multi-Post Stories <br> Gain+Glory',
  technolgies: ['React', 'Bootstrap', 'typeScript', 'redux'],
  id:'thirdProject',
  popupDescription: {
    imageSrc: pro1,
      titre: 'Add task',
      technolgies: ['React', 'Bootstrap', 'typeScript', 'redux'],
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://ciraganenicole.github.io/Portfolio/',
      source: 'https://github.com/ciraganenicole/Portfolio',
  },
};

const projects = [project1,project2,project3]

// functions
const handleClick = (key) => {
  setPopup(
    projects.filter((modal)=>modal.id === key ? {...modal}:false)
  )
// console.log(popup.popupDescription
  console.log(popup[0].popupDescription.titre)
  setShow(true)
}

const handleShow = () => {
  setShow(false)
}

// fondition

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
      {projects.map((work)=>(
        <Project id={work.id}
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