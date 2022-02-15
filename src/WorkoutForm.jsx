import React, { useState } from "react";

function WorkoutForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    area: "",
    difficulty: "",
    instructions: "",
    name: "",
  });

  function handleChange(e) {
    const objKey = e.target.name;
    const objVal = e.target.value;
    setFormData({ ...formData, [objKey]: objVal });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => onFormSubmit(data));
  }

  return (
    <div className="workoutForm">
      <h3>Add an Exercise </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="text1">Exercise Name:</label>
          <br></br>
          <input
            onChange={handleChange}
            className="input"
            name="name"
            value={formData.name}
            type="text"
            id="text1"
          />
        </div>
        <div>
          <label for="textarea1">Instructions:</label>
          <br></br>
          <input
            className="input"
            onChange={handleChange}
            name="instructions"
            value={formData.instructions}
            id="textarea1"
          ></input>
        </div>
        <div>
          <label for="select1">Select Muscle Group:</label>
          <br></br>
          <select
            onChange={handleChange}
            name="area"
            id="select1"
            placeholder="Field Textarea"
          >
            <option value="Select">Select</option>
            <option value="Abs">Abs</option>
            <option value="Quads">Quads</option>
            <option value="Glutes">Glutes</option>
            <option value="Biceps">Biceps</option>
            <option value="Triceps">Triceps</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Chest">Chest</option>
          </select>
        </div>
        <div></div>
        <div class="fieldset error">
          <label for="select1">Select Difficulty:</label>
          <br></br>
          <select
            onChange={handleChange}
            id="select1"
            name="difficulty"
            placeholder="Field Textarea"
          >
            <option value="">Select Difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
}
export default WorkoutForm;
