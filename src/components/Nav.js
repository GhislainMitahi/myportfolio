import React from 'react'

const Nav = (props) => {
  return (
    <div className="flex w-screen h-10 bg-primary items-center text-white fixed">
       <p className="w-1/5 text-center">{props.data.firstName} {props.data.lastName}</p>
       <ul className="flex w-3/4 h-14 justify-end items-center">
           <li className="px-4">Portfolio</li>
           <li className="px-4">Projects</li>
           <li className="px-4">About</li>
           <li className="px-4">Contacts</li>
       </ul>
    </div>
  )
}

export default Nav