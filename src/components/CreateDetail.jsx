import React, { useState } from 'react';
import { supabase } from '../client.js';
import Form from './Form';

const CreateDetail = () => {
  const [post, setPost] = useState({ name: "", speed: "", color: "" });
  const [radioSelected, setRadioSelected] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (event) => {
    setPost((prev) => ({
      ...prev,
      color: event.target.value,
    }));
    setRadioSelected(true);
  };

  const createPost = async (event) => {
    event.preventDefault();
    if (!radioSelected) {
      alert("Please select a color");
      return;
    }
    await supabase
      .from('crewmate')
      .insert({ name: post.name, speed: post.speed, color: post.color })
      .select();
    window.location = "/create";
  };

  return (
    <>
    <div className='main-block'>
      <h1 className="create-heading">Create a New Crewmate</h1>
      <h3 className="create-heading">Fill out the form below to create a new crewmate!</h3>
      <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="" height="200" />

      <Form post={post} handleChange={handleChange} handleRadioChange={handleRadioChange} />


      <button onClick={createPost}>Create Crewmate</button>
      </div>
    </>
  );
};

export default CreateDetail;
