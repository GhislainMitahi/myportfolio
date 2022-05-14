import React from 'react'
import { BsLinkedin,BsStackOverflow,BsTwitter} from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const Contact = () => {
  return (
<>
<div className="contact">
    <div className="the_container">
    <div className="text-2xl">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestias iste inventore dicta reprehenderit cumque natus quod recusandae facilis, dignissimos nulla aperiam aliquam quae unde placeat? Nostrum magni ad adipisci!
</div>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span className="text">First Name</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span className="text">Last Name</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span className="text">Email</span>
                    <span className="line"></span>
                </div>
            </div>
            {/* <div className="col">
                <div className="inputBox ">
                    <input type="text" name="Mobile" required="required"/>
                    <span className="text">Mobile</span>
                    <span className="line"></span>
                </div>
            </div> */}
        </div>




        <div className="row100">
            <div className="col">
                <div className="inputBox textarea">
                    <textarea required="required"></textarea>
                    <span className="text">Type your message here ...</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>

        <div className="row100">
            <div className="col">
                <input type="submit" value="send"/>
            </div>
        </div>
    </div>
</div>
<span className="w-screen bg-black border border-blac h4k"></span>
<p className=" flex justify-center p-4">
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
</p> 
</>
  )
}

export default Contact