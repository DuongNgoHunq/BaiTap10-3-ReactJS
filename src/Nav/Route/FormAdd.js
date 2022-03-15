import React, { useEffect, useRef, useState,useMemo } from 'react';

export const FormAdd = (props) => {
      const [formData, setFormData] = useState({
        name:"",
        age:"",
        classType:""
      })
    // handle input
    const handleInput=(e)=>{
        setFormData({
          ...formData,
          [e.target.name]:e.target.value,
        })
      } 

  // handleSubmit 
      const handleSubmit = ()=>{
        // if(formData.isEdit){
        //   const {originClassType, index} = formData;
        //   if(originClassType !== formData.classType){
        //     if(formData.classType === 'react'){
        //       reactMembers.splice(index,1);
        //       setReactMembers([...reactMembers]);
        //       javaMembers.push(formData);
        //       setJavaMembers([...javaMembers])
        //     } else {
        //       javaMembers.splice(index,1);
        //       setJavaMembers([...javaMembers]);
        //       reactMembers.push(formData);
        //       setReactMembers([...reactMembers])
        //     }
        //   } else {
        //     if(formData.classType === 'react'){
        //       javaMembers[index] = formData;
        //       setJavaMembers([...javaMembers]);
        //     } else {
        //       reactMembers[index] = formData;
        //       setReactMembers([...reactMembers]);
        //     }
        //   }
        // } else {
        //   if(formData.classType === "java"){
        //     javaMembers.push(formData);
        //     setJavaMembers([...javaMembers]);
        //   } else{
        //     reactMembers.push(formData);
        //     setReactMembers([...reactMembers]);
        // //   }
        //   setFormData({
        //     name:"",
        //     age:"",
        //     classType:""
        //   })
        }
        
    //   }
  return (
    <div>
        <h1>Form Add Members</h1>
        <label>Name: </label>
          <input  onChange={(e)=>handleInput(e)}></input>
          {"---"}
          <label>Age: </label>
          <input name="age" value={formData.age} onChange={(e)=>handleInput(e)}></input>
          <select name="classType" value={formData.classType} onChange={(e)=>handleInput(e)}>
            <option value="react">React</option>
            <option value="java">Java</option>
          </select>
          <button onClick={()=>handleSubmit()}> Submit</button>
    </div>
  )
}