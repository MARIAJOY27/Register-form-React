import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailid, setEmail] = useState('')
  const [loginStatus, setLoginStatus] = useState('')

  const [isUsername, setIsUser] = useState(true)
  const [isValidpsw, setIsValidpsw]= useState(true)
  const [isValidemail, setIsValidemail]= useState(true)

  const validate=(e)=>{
    const {name , value}= e.target
    console.log(name);
    console.log(value);

    //regular expression
    if(!!value.match(/^[a-zA-Z0-9_]{5,15}$/) && name=='username'){
       setUsername(value)
       setIsUser(true)

    }
    else if(!!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{5,}$/) && name=='password'){
      setPassword(value)
      setIsValidpsw(true)
    }
    else if(!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && name=='emailid'){
      setEmail(value)
      setIsValidemail(true)
    }
    else{
      if(name=='username'){
        setUsername(value)
       setIsUser(false)
      }
      else if(name=='password'){
        setPassword(value)
        setIsValidpsw(false)
      }
      else if(name=='emailid'){
        setEmail(value)
        setIsValidemail(false)
      }
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!username.trim() || !password.trim() || !emailid.trim()) {
      setLoginStatus(<span style={{color:'orange'}}>Please fill in all fields</span>);
      return; 
    }
  
    if(isUsername && isValidpsw && isValidemail ){
      setLoginStatus("Login Successful")
    }
    else{
      setLoginStatus(<span style={{ color: 'red' }}>Invalid Credentials</span>)
    }
  }

  const handleReset = ()=>{
    setUsername('')
    setPassword('')
    setEmail('')
    setLoginStatus('')
    setIsUser(true)
    setIsValidpsw(true)
    setIsValidemail(true)
  }


  return (
    <>
       <div className='main'>
        <div className='sub p-5'>
          <h1 className='text-center text-primary'>Registration Form</h1>

          <div className=' d-flex justify-content-center align-items-center result rounded mt-5 flex-column'>
            <h2 className='text-success'>{loginStatus}</h2>
          </div>

          <form action="" className='mt-4'>
          <TextField id="outlined-basic" label="Username" name='username' value={username ||""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} /> 
          {!isUsername && <p className='text-danger'>Invalid Input</p>}
          <br /><br />
          <TextField id="outlined-basic" label="Password" name='password' value={password ||""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} /> 
          {!isValidpsw && <p className='text-danger'>Invalid Input</p>}
          <br /><br />
          <TextField id="outlined-basic" label="Email" name='emailid' value={emailid ||""} variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
           {!isValidemail && <p className='text-danger'>Invalid Input</p>}
          </form>

          <div className='d-flex-mt-3'>
          <Button onClick={handleSubmit} variant="contained"  color="success" className='w-25 ms-5 mt-3 justify-content-center align-items-center' disabled={isUsername && isValidpsw && isValidemail?false:true}> LOGIN
           </Button>
           <Button onClick={handleReset} variant="outlined" color="error" className='w-25 ms-5 mt-3 justify-content-center align-items-center'>RESET 
           </Button>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
