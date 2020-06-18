import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h3>About Me</h3>
            <div>
                <div className="left" style={{width:"70%",textAlign:"justify",float:"left"}}>
                <p>My name is Mahen Mondal and I am a MERN stack developer .
               I worked on both fontend and backend technology. Javascript is my favourite 
               scripting language and c++ is my favourite programing language .I have worked on various 
               js libralies and framework specially
               (react,node,express,jquery) </p>
               <div>
                   <h4 style={{marginBottom:"20px"}}>My Social Media Account</h4>
                   <ul style={{display:"inline",marginTop:"40px"}}>
                   <li style={{float:"left",marginLeft:"0",listStyleType:"none"}}>
                      <a href={"https://github.com/kumohen"}> <i    className="fa fa-github fa-3x " aria-hidden="true"></i> </a>
                    </li>
                   <li style={{float:"left",marginLeft:"15%",listStyleType:"none"}}>  
                   <a href="https://www.linkedin.com/in/mohen-mondal-735798157/"> <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                    </li>
                   <li style={{float:"left",marginLeft:"15%",listStyleType:"none"}}>
                   <a href="https://www.facebook.com/mahen.1233/">  <i    className="fa fa-facebook fa-3x " aria-hidden="true"></i></a>
                       </li>
                   <li style={{float:"left",marginLeft:"15%",listStyleType:"none"}}>  
                   <a href="https://www.instagram.com/mohen_mondal/">  <i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                    </li>
                </ul>
                   
               </div>
                </div>
               
            </div>
         
        </div>
    );
};

export default About;