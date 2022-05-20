import React from 'react'

const Nav = (props) => {
  return (
    
   
    <nav className="bg-blue-450 p-1 mt-0 fixed w-full top-0">
        <div className="container mx-auto flex flex-wrap z-10 items-center">
		    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold ">
				<a className="text-white no-underline hover:text-white hover:no-underline" href="#main_page">
					<span className=" text-2xl pl-2 main_name"><i className="em em-grinning" ></i>Ghislain Mitahi</span>
				</a>
            </div>
			<div className="flex w-full pt-2 content-center ms:justify-around justify-between md:w-1/2 md:justify-end menu">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li className="mr-3">
					<a className="inline-block py-2 px-4 text-white no-underline" href="#portofolio">Portfolio</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-300 no-underline hover:text-gray-100 hover:underline py-2 px-4" href="#project">Pojects</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-300 no-underline hover:text-gray-100 hover:underline py-2 px-4" href="#about">About</a>
				  </li>
					<li className="mr-3">
					<a className="inline-block text-gray-300 no-underline hover:text-gray-100 hover:underline py-2 px-4" href="#contact">Contact</a>
				  </li>
				</ul>
			</div>
        </div>
    </nav>
  )
}

export default Nav





