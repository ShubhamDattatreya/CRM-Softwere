
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const ep = { email: "", password: "" };
  const [count, setCount] = useState(ep);

  const navigate = useNavigate();

  const data = (e) => {
    setCount({ ...count, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://crm-softwere.onrender.com/user/register", 
        count, {
          withCredentials: true // 👈 LOGIN ME BHI MUST
        }
      );

      console.log(res.data);

      alert("Signup Success");
      navigate("/login");  

    } catch (error) {
      console.error(error);
      alert("Signup Failed");
    }
  };

  const login =()=>{
    navigate("/login")
  }

  return (
    <>
      <div>Signup Page</div>

      <form onSubmit={submit}>

      
        <label>Email</label>
        <input
          onChange={data}
          type='text'
          placeholder='email'
          name='email'
          value={count.email}
        />

        <label>Password</label>
        <input
          onChange={data}
          type='password'   
          placeholder='password'
          name='password'
          value={count.password}
        />

        <button type='submit'>Submit</button>

      </form>

      <div style={{color:'blue'}} onClick={login}>Login</div>
    </>
  );
}

export default Signup;
