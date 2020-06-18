import React,{useState} from 'react';
import Skill from "./Skill";
import Project from './Project';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import Image from "./Image";

const Home = () => {
    const [skill,setSkill] = useState(true);
    const [eduction,setEduction] = useState(false);
    const [project,setProject] = useState(false);
    const [experience,setExperience] = useState(false);
    const [about,setAbout] = useState(false);

  
    const  skillHandle = e => {
        setEduction(false);
        setExperience(false)
        setProject(false)
        setAbout(false);
         setSkill(true)
     }
     const  eductionHandle = e => {
        setSkill(false);
        setExperience(false)
        setProject(false)
        setAbout(false);
    
        setEduction(true)
    }
    const  projectHandle = e => {
        setEduction(false);
        setExperience(false)
        setSkill(false)
        setAbout(false);
         setProject(true)
     
    }
    const  experienceHandle = e => {
        setEduction(false);
        setSkill(false)
        setProject(false)
        setAbout(false);
      
        setExperience(true)
    }
    const  aboutHandle = e => {
        setEduction(false);
        setExperience(false)
        setProject(false)
        setSkill(false);
       
        setAbout(true)
    }
   
    return (
        <div className="container" style={{marginTop:"20px"}}>
        <div className="row" >
            <div className="col-sm-3 bg-info" style={{height:"700px",padding:"10px"}}>
                  <div style={{height:"50%",backgroundColor:"#acb7ac"}}>
                     <p style={{textAlign:"center",fontWeight:"600",fontSize:"20px",marginTop:"5px",textDecoration:"underline"}}>My Portfolio</p>
                     <Image/>
                  </div>
                  <div style={{marginTop:"30px"}}>

                  <button type="button" className="btn btn-success btn-block mt-2"  onClick={eductionHandle}> 
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i> Eduction  </button>
                  <br/>
                  <button type="button" className="btn btn-success btn-block mt-2" onClick={skillHandle}> 
                  <i className="fa fa-tasks" aria-hidden="true"></i> Skill  </button>
                  <br/>
                  <button type="button" className="btn btn-success btn-block mt-2"  onClick={projectHandle}>
                    Project  </button>
                  <br/>
                  <button type="button" className="btn btn-success btn-block mt-2" onClick={aboutHandle}>
                  <i className="fa fa-male" aria-hidden="true"></i>  About  </button>
                  <br/>
                  {/* <button type="button" className="btn btn-success btn-block mt-2"  onClick={experienceHandle}>
                    Experience  </button>
                  <br/> */}
             
                  </div>
            </div>
        
            <div data-spy="scroll" className="col-sm-9 scrollspy-example right" >
               
                {skill ?  <Skill /> : null  }   
                {project ?  <Project /> : null  }   
                {eduction ?  <Education /> : null  }   
                {experience ?  < Experience/> : null  }   
                {about ?  <About /> : null  }  
                 
            </div>
        </div>
</div>
    );
};

export default Home;