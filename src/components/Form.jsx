import React from 'react'
import { useState,useEffect } from 'react';

  // Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function Form(props) {
  //State to hold the data of our form
  const[formData,setFormData] = useState({searchterm: ""})

//handleChange - updates formData when we type into form
  const handleChange = (event)=>{
    //use the event object to detect key and value to update
    setFormData({...formData,[event.target .name]:event.target.value})
  };

  const handleSubmit = (event) => {
     //prevent page from refreshing on form submission
    event.preventDefault();
   //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm);
  };

//The component must return some JSX
  return (
    <div>
        <Form onSubmit={handleChange}>
            <input 
            type="text"
            name="seacrhterm"
            onChange={handleChange}
            value={formData.searchterm}
            />
           <input type="submit" value="submit"/>         
        </Form>
    </div>
  )
}

export default Form

