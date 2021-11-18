import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    UserName: "",
    UserEmail: "",
    UserPassword: "",
    UserPassword2: ""
  });

  const { UserName, UserEmail, UserPassword, UserPassword2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log("formdata",formData);
  const onSubmit = async (e) => {
    e.preventDefault();
    
      // console.log(formData);
      const newUser = {
        UserName,
        UserEmail,
        UserPassword,
        UserPassword2
      };
      console.log("newuser",newUser);
      var local_storag_data_form
      if ("users_update" in localStorage){
        local_storag_data_form = JSON.parse(localStorage.getItem("users_update") || "[]");
      }else{
       local_storag_data_form = JSON.parse(localStorage.getItem("users") || "[]");
      }

console.log("localform-------",local_storag_data_form)

local_storag_data_form.push(newUser);
localStorage.setItem("users_update", JSON.stringify(local_storag_data_form));
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='text'
            placeholder='Name'
            name='UserName'
            value={UserName}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='email'
            placeholder='Email Address'
            name='UserEmail'
            value={UserEmail}
          />
          {/* <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small> */}
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='password'
            placeholder='Password'
            name='UserPassword'
            minLength='6'
            value={UserPassword}
          />
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='password'
            placeholder='Confirm Password'
            name='UserPassword2'
            minLength='6'
            value={UserPassword2}
          />
        </div>
        {/* <input
          onChange={onChange}
          type='submit'
          className='btn btn-primary'
          value='Register'
          onClick={() => navigate('/pagination')}
        /> */}
        <div style={{textAlign: 'inline'}}>
            <button style={{backgroundColor:"Green", color: "white",
  padding: "5px 15px",marginTop: "10px", marginBottom: "20px",cursor:"pointer",borderRadius: "5px", margin: "10px 0px",fontSize: "14px"}} >Register</button>
  <button style={{backgroundColor:"Orange", color: "white",
  padding: "5px 15px",marginTop: "10px", marginBottom: "20px",cursor:"pointer",float:"right",borderRadius: "5px", margin: "10px 0px",fontSize: "14px"}} onClick={() => navigate('/pagination')} >See Users Data</button>
  </div>
      </form>
      {/* <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p> */}
    </Fragment>
  );
};

export default Form;