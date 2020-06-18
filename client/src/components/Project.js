import React, { useState,useEffect } from 'react';
import {Form,Button,Card,Modal,Spinner} from 'react-bootstrap';

const Project = () => {
    const[name,setName]=useState("")
    const [detail,setDetail] = useState("");
    const[user,setUser]=useState(null);
    const [data,setData] = useState([]);
    const [show, setShow] = useState(false);


    const styleModal = {
        marginTop: "10%",
        marginLeft: "17%",
        paddingLeft:"30px",
        paddingRight:"30px",
        width:770,
        height:480,
        backgroundColor:"#ffffffff",
        borderRadius:21.5,
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/user`,{
           
        }).then(res=>res.json())
        .then(result=>{
                setUser(result)
         })
      },[data])

      const addProject = (name,detail,userId)=>{
      
        fetch('http://localhost:5000/addProject',{
            method:"put",
            headers:{
                "Content-Type":"application/json"
               
            },
            body:JSON.stringify({
                userId,
                name,
                detail
            })
        }).then(res=>res.json())
        .then(result=>{
           
         
          setData(result)
       
        }).catch(err=>{
            console.log(err)
        })
  }
  

  
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

    const submitForm = (e)=>{
        e.preventDefault();
       
        addProject(name,detail,user[0]._id);
        setDetail("");
        setName("");
        handleClose();
    }

    const renderItem = ()=>{
        
           
        return user  && user.map(ele => {
            return ele.projects.map(item => {
                       return (
                    <Card style={{marginBottom:"5px"}} key={item._id}>
                    <Card.Body >
                        <Card.Title>Project Name:{item.name}</Card.Title>
                        <Card.Text>
                           {item.detail}
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
           )
             })
        
         })
           
          
        
    }
    return (
        <div>
            {
                user === null ? 
                <Spinner animation="border" variant="danger" />
                :
                <>
                      <Card>
                        {renderItem()}
                        </Card>
                        <hr/>
                        <Button variant="primary" onClick={handleShow} style={{marginLeft:"300px"}}>
                           +
                        </Button>
                </>
            }
           
         

            <Modal show={show} onHide={handleClose} size='lg'  animation={false} style={styleModal}>
            <Form onSubmit={submitForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                     placeholder="Enter project name" />
                  
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea"
                     onChange={e => setDetail(e.target.value)}
                     value={detail}
                    rows="3" />
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </Form>

            </Modal>
    

           
            <hr/>
            
        </div>
    );
};

export default Project;