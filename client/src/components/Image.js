import React,{useEffect,useState} from 'react';

const Image = () => {
    const[user,setUser]=useState(null);
    const[data,setData] = useState([])
    const[image,setImage]=useState("");

    useEffect(()=>{
        fetch(`http://localhost:5000/user`,{
           
        }).then(res=>res.json())
        .then(result=>{
                
                setUser(result)
      
         
        })
       
     
     },[data]);
     useEffect(()=>{
        if(image){
         const data = new FormData()
         data.append("file",image)
         data.append("upload_preset","voting")
         data.append("cloud_name","dvfpkko1z")
         fetch("https://api.cloudinary.com/v1_1/dvfpkko1z/image/upload",{
             method:"post",
             body:data
         })
         .then(res=>res.json())
         .then(data=>{
     
        
            fetch('http://localhost:5000/image',{
                method:"put",
                headers:{
                    "Content-Type":"application/json",
                   
                },
                body:JSON.stringify({
                    image:data.url,
                    userId:user[0]._id
                })
            }).then(res=>res.json())
            .then(result=>{
              setData(result)
            })
        
         })
         .catch(err=>{
             console.log(err)
         })
        }
     },[image]);

     const updatePhoto = (file)=>{
       
       setImage(file)
    }
    return (
        <div>
           
      
            {
                user !== null ? 
                <>
                   <img src={user[0].image} alt="mohen" 
                   style={{height:"150px",width:"150px",borderRadius:"50%",marginLeft:"45px",marginTop:"10px"}} />
                </>
                : ""
            }
           <div className="file-field input-field" >
            <div className="btn #64b5f6 blue darken-1" >
             
                <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])}
                className="file-input"
                />
            </div>
           
            </div>
        </div>
    );
};

export default Image;