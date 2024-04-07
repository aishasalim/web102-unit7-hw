import React, { useState } from 'react';

const Form = ({ post, handleChange, handleRadioChange }) => {
  return (
    <form className="form-container">
      <div className="create-card card">
        <div className="mini-container">
          <label><h3>Name:</h3></label>
          <input type="text" name="name" placeholder="Enter crewmate's name" value={post.name} onChange={handleChange} />
        </div>
      </div>
      <div className="create-card card">
        <div className="mini-container">
          <label><h3>Speed (mph):</h3></label>
          <input type="text" name="speed" placeholder="Enter speed in mph" value={post.speed} onChange={handleChange} />
        </div>
      </div>
      <div className="create-card card">
        <div className="mini-container">
          <label><h3>Color:</h3></label>
          <ul>
            <li><input id="Red" name="color" type="radio" value="Red" checked={post.color === "Red"} onChange={handleRadioChange} required />Red</li>
            <li><input id="Green" name="color" type="radio" value="Green" checked={post.color === "Green"} onChange={handleRadioChange} required />Green</li>
            <li><input id="Blue" name="color" type="radio" value="Blue" checked={post.color === "Blue"} onChange={handleRadioChange} required />Blue</li>
            <li><input id="Purple" name="color" type="radio" value="Purple" checked={post.color === "Purple"} onChange={handleRadioChange} required />Purple</li>
            <li><input id="Yellow" name="color" type="radio" value="Yellow" checked={post.color === "Yellow"} onChange={handleRadioChange} required />Yellow</li>
            <li><input id="Orange" name="color" type="radio" value="Orange" checked={post.color === "Orange"} onChange={handleRadioChange} required />Orange</li>
            <li><input id="Pink" name="color" type="radio" value="Pink" checked={post.color === "Pink"} onChange={handleRadioChange} required />Pink</li>
            <li><input id="Rainbow" name="color" type="radio" value="Rainbow" checked={post.color === "Rainbow"} onChange={handleRadioChange} required />Rainbow</li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Form;
