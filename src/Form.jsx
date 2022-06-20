import React from "react";
import { useState } from "react";

const Form = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    isIndian:false,
  });
  const handleOnChange=(e)=>{
      let {name,value,checked,type}=e.target;
      if(type=="checkbox"){
        setform({
            ...form,
            [name]:checked,
        });
      }else{
        setform({
            ...form,
            [name]:value,
        });
      }
      
      console.log(form)
  }
  return (
    <div>
      Form
      <form>
        <div>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter Name..."
            name="name"
            value={form.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Age :</label>
          <input
            type="number"
            placeholder="Enter Age..."
            name="age"
            value={form.age}
            onChange={handleOnChange}
          />
        </div>
        
        <div>
          <label>Address :</label>
          <input
            type="text"
            placeholder="Enter Address..."
            name="Address"
            value={form.password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          {/* <label>Email :</label>
          <input
            type="email"
            placeholder="Enter Email..."
            name="email"
            value={form.email}
            onChange={handleOnChange}
          /> */}
          <select name="department">
              <option value="">Operation Management</option>
              <option value="">Human Resources</option>
              <option value="">Software Development</option>
              <option value="">Testing</option>
          </select>
        </div>
        
        <div>
            <input type="checkbox"
            name="isIndian"
            value={form.isIndian}
            onChange={handleOnChange}

            />
            <label> : Is Indian</label>
        </div>
        <div>
            <input type="radio"
            value="Male"
            name="gender"
            onChange={handleOnChange}
            />
            <label>Male</label>
        </div>
        <div>
            <input type="radio"
            value="Female"
            name="gender"
            onChange={handleOnChange}
            />
            <label>Female</label>
        </div>
      </form>
    </div>
  );
};

export default Form;
