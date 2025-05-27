import React,{useState} from 'react'
import './Signup.css'

function Signup() {
    const [formData,setFormdata]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    function handleInputChange(event){
      const {name,value}=event.target
      setFormdata((prevData)=>({...prevData,[name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData,"The input data")
    }
  return (
    <div className='sign-up-container'>
        <div className='signup-card'>
            <h1>Registration From</h1>
            <form onSubmit={handleSubmit} className='form-container'>
                <label htmlFor="">First name</label>
                <input type="text" placeholder='First name' name='firstName' value={formData.firstName} onChange={(event)=>handleInputChange(event)}/>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last name' name='lastName' value={formData.lastName} onChange={(event)=>handleInputChange(event)}/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='email' name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}/>
                <label htmlFor="">Password</label>
                <input type="text" name='password' value={formData.password} onChange={(event)=>handleInputChange(event)}/>
                <button type='submit'> Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Signup

//