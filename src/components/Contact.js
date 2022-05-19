import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsLinkedin,BsStackOverflow,BsTwitter} from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();        // Prevents default refresh by the browser
          emailjs.sendForm("service_u4ymmn2","template_468242f", form.current, 'DYvXTRtmqigSrzvRl')
        .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
        };

  return (
<>
<div className=" contact flex flex-col pt-4" id="contact">
<h1 className="text-center md:text-3xl  text-primary md:font-bold contact-titre">Contact</h1>
<div className="flex items-center place-content-center">
    <div className="the_container md:flex items-center place-content-center gap-8 ">
    <div className="md:text-3xl md:font-bold md:w-2/5 text-primary mt-6 h-full md:text-start">
    I'm always interested in building new interesting projects, open to all kinds of discussions, and happy to meet people, feel free to reach out to me or hire me.
</div>
<form action="" ref={form} onSubmit={(e)=>handleSubmit(e)} className="md:w-2/4 mt-6 md:border">
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="firstname" required="required"/>
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
                    <input type="mail" name="lastname" required="required"/>
                    <span className="email" >Email</span>
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
                    <textarea required="required" name="message"></textarea>
                    <span className="text">Type your message here ...</span>
                    <span className="line clean"></span>
                </div>
            </div>
        </div>

        <div className="row100">
            <div className="col">
                <input type="submit" value="send" className="text-white"/>
            </div>
        </div>
        </form>
    </div>
    </div>
</div>
<span className="w-full block bg-black border drop-shadow-md  border-gray-3500"></span>
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