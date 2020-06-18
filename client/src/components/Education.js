import React, { useState,useEffect } from 'react';
import {Form,Button,Card} from "react-bootstrap"
import Moment  from 'react-moment';

const Education = () => {
    const[school,setSchool] = useState("")
    const[degree,setDegree] = useState("")
    const[from,setFrom] = useState("")
    const[to,setTo] = useState("")
    const [user,setUser] = useState(null);
    const[data,setData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/user`,{
           
        }).then(res=>res.json())
        .then(result=>{
                setUser(result)
         })
        
    },[data,user])
    const addEducation = (school,degree,from,to,userId)=>{
      
        fetch('http://localhost:5000/addEdu',{
            method:"put",
            headers:{
                "Content-Type":"application/json"
               
            },
            body:JSON.stringify({
                school,degree,from,to,
                userId
            })
        }).then(res=>res.json())
        .then(result=>{
           
         
          setData(result)
       
        }).catch(err=>{
            console.log(err)
        })
  }
    const submitForm = (e)=>{
        e.preventDefault();
        addEducation(school,degree,from,to,user[0]._id);
        setDegree("")
        setSchool("")
        setFrom("")
        setTo("")
    }
    
    const renderItem = ()=>{
        
        
        return user  && user.map(ele => {
            return ele.eduction.map(item => {
                       return (
                    <Card  key={item._id} className="card_edu">
                    <Card.Body >
                        <Card.Text>College Name:{item.school}</Card.Text>
                        <Card.Text>
                          Degree: {item.degree}
                        </Card.Text>
                        <p> Year:<Moment format='YYYY'>{item.from}</Moment>-<Moment format='YYYY'>{item.to}</Moment></p>
                    </Card.Body>

                    </Card> 
           )
             })
        
        })
           
          
        
    }
    return (
        <div>
            {renderItem()}
            <hr/>
               <Form onSubmit={submitForm}>  
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>My college</Form.Label>
                    <Form.Control type="text"
                    onChange={e => setSchool(e.target.value)}
                    value={school}
                     placeholder="College Name" />
                  
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>My Degree</Form.Label>
                    <Form.Control type="text"
                    onChange={e => setDegree(e.target.value)}
                    value={degree}
                     placeholder="Field Of Study" />
                  
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>From:</Form.Label>
                    <Form.Control type="date"
                    onChange={e => setFrom(e.target.value)}
                    value={from}
                   />
                  
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date"
                    onChange={e => setTo(e.target.value)}
                    value={to}
                   />
                  
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </Form>
        </div>
    );
};

export default Education;