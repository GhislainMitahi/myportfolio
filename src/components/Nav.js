import React from 'react'

const Nav = (props) => {
  return (
    
   
    <nav className="bg-primary p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
		    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<a className="text-white no-underline hover:text-white hover:no-underline" href="http//">
					<span className="text-2xl pl-2"><i className="em em-grinning"></i> Ghislain Mitahi</span>
				</a>
            </div>
			<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li className="mr-3">
					<a className="inline-block py-2 px-4 text-white no-underline" href="http//">Portfolio</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-300 no-underline hover:text-gray-100 hover:underline py-2 px-4" href="http//">Pojects</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-300 no-underline hover:text-gray-100 hover:underline py-2 px-4" href="http//">About</a>
				  </li>
					<li className="mr-3">
					<a className="inline-block text-gray-300 no-underline hover:text-gray-100 hover:underline py-2 px-4" href="http//">Contact</a>
				  </li>
				</ul>
			</div>
        </div>
    </nav>
  )
}

export default Nav





