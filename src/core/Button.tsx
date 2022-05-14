import React from 'react'

function Button (props){
  return (
 
  <a href={props.href} className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 inline-block">{props.children} </a>
  )
}

export default Button 