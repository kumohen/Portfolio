import React,{useEffect, useState} from 'react';
import {ProgressBar,Spinner} from "react-bootstrap";
const Skill = () => {
    const[skill,setSkill]=useState("");
    const[percentage,setPercentage]=useState("")
   const [show,setShow] = useState(false)
    const[user,setUser]=useState(null);
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/user`,{
           
        }).then(res=>res.json())
        .then(result=>{
                
                setUser(result)
            console.log(user)
          
        })
       
     
     },[data])
 
     const addSkill = (text,percentage,userId)=>{
      
        fetch('http://localhost:5000/addSkills',{
            method:"put",
            headers:{
                "Content-Type":"application/json"
               
            },
            body:JSON.stringify({
                userId,
                text,
                percentage
            })
        }).then(res=>res.json())
        .then(result=>{
           
         
          setData(result)
       
        }).catch(err=>{
            console.log(err)
        })
  }
 
  const toggle = ()=>{
      setShow(!show);
  }
   const  renderSkills = ()=>{
     
          return user  && user.map(ele =>
              ele.skills.map(item => 
                  <ProgressBar key={item._id} now={`${item.percentage}`} 
                  variant="warning"
                  label={`${item.text} : ${item.percentage}%`} style={{marginBottom:"10px",height:"35px",fontSize:"20px"}} />
           ))
     }
     const submitForm = (e)=>{
        e.preventDefault()
        addSkill(skill,percentage,user[0]._id)
        setPercentage("")
        setSkill("");
     }
    return (
        <div>
             {user === null ? 
              <Spinner animation="border" variant="danger" />
              :
              <>
              <h3 style={{marginLeft:"300px",marginBottom:"30px",marginTop:"5px",textDecoration:"underline"}}>My Skills</h3>
              {renderSkills()}
              <button onClick={toggle} className="btn btn-primary" style={{marginLeft:"300px",marginTop:"40px"}}>Add skill</button>
              <hr/>
              </>
            }
          
           
            {show ? 
             <form onSubmit={submitForm}>
                     <div className="form-group">
                        <label htmlFor="examplehtmlFormControlInput1">Skill</label>
                        <input type="text" 
                        onChange={e => setSkill(e.target.value)}
                        value={skill}
                        className="form-control" name="skill" placeholder="example #react"/>
                    </div>   
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Percantage</label>
                        <input type="number"
                        value={percentage}
                         onChange={e => setPercentage(e.target.value)}
                         className="form-control" name="percentage" placeholder="example #50%"/>
                    </div>                    
                                
                    <button type="submit" className="btn btn-success">Submit</button>
            </form>
              : null }
        </div>
    );
};

export default Skill;