// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./login.css";

// function Login() {

//   const tailwindInputBtn = "w-80 h-9 border border border-gray-500 rounded p-2 text-black ";
//   // const tailwindsubmitbtn ="bg-[#7555E9] h-9 border border-gray-500 px-2 mb-2 rounded text-black hover:bg-[#257EDC]  transition duration-300";

//   const [StatusBtn, setStatusBtn] = useState(false);
//   const [isInfoModelOpen, setIsInfoModelOpen] = useState(false);
//   const [status, setStatus] = useState(true)

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const [formInfo, setFormInfo] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     category: "",
//     comment: ""
//   });


//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       const resp = await axios.post(
//         "https://crm-softwere.onrender.com/user/login",
//         formData
//       );
// console.log("ye aa rha hai ya nhi ",resp.data)
//       if (resp.data.success) {
//         localStorage.setItem("userId", resp.data.userId);
//         localStorage.setItem("email", resp.data.email);
//         localStorage.setItem("role", resp.data.role);

//         const role = resp.data.role.toLowerCase();

//         if (role === "superadmin") {
//           alert("Welcome to SuperAdmin");
//           navigate("/dashboard");
//         }
//         else if (role === "admin") {
//           alert("Welcome to Admin");
//           navigate("/admindashboard");
//         }
//         else if (role === "superauditor") {  
//           navigate("/superauditor");
//         }
//       }

//     } catch (error) {
//       console.error(error);

//       if (error.response && error.response.status === 401) {
//         alert("Wrong password!");
//       } else {
//         alert("Invalid Credentials ya User nahi mila");
//       }
//     }
//   };

//   const viewForm = () => {
//     setStatus(false)
//     setIsInfoModelOpen(true);

//   };

//   const handleFormInput = (e) => {
//     setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://crm-softwere.onrender.com/admin/adminRegister",
//         formInfo
//       );
//       setFormInfo("");


//       if (response.data.success) {
//         alert("Request submitted successfully ");


//         setFormInfo({
//           name: "",
//           email: "",
//           mobile: "",
//           category: "",
//           comment: ""
//         });


//         setIsInfoModelOpen(false);
//       }

//     } catch (error) {
//       console.log(error);
//       alert("Error submitting form ");
//     }
//   };

//   const ForgotPassword = async (userId) => {
//     try {
//       await axios.post(`https://crm-softwere.onrender.com/admin/${userId}`, {
//         ForgotPassword: true
//       });
//       setStatusBtn(true);
//     } catch (error) {
//       alert("not working");
//     }
//   };


//   return (
//     <>

//       {status &&
//         <section   style={{ backgroundImage: "url('/image/crm.jpg')" }} className='bg-cover bg-center h-screen w-screen p-16 grid justify-center align-middle ' >


//           <form
//   className="grid px-6 my-20 text-white rounded-md bg-white/10 backdrop-blur-md"
//   onSubmit={submit}
// >
//             <h2 className='font-bold text-center pt-5 text-lg' >Login Page</h2>
//             <input className={tailwindInputBtn}
//               onChange={handleInputChange}
//               type="text"
//               name="email"
//               value={formData.email}
//               placeholder="Enter email"
//               required
//             />
//             <input className={tailwindInputBtn}
//               onChange={handleInputChange}
//               type="text"
//               name="password"
//               value={formData.password}
//               placeholder="Enter password"
//               required
//             />

//             <button className= "tailwindsubmitbtn" type="submit">Login</button>

//             <div className='flex justify-between '>
//               <button className='bg-slate-600 h-8 px-2 rounded hover:bg-slate-700' onClick={ForgotPassword} >Forgot Password</button>
//               <button className='bg-slate-600 h-8 px-2 rounded hover:bg-slate-700' onClick={viewForm}>Request Access</button>

//             </div>

//           </form>


//         </section>}

//       {isInfoModelOpen && (

//         <section   style={{ backgroundImage: "url('/image/crm.jpg')" }} className='bg-cover bg-center h-screen w-screen p-16 grid justify-center align-middle '>
//           <form className="grid px-10  text-white rounded-md bg-white/10 backdrop-blur-md"onSubmit={handleFormSubmit}>

//             <h3 className='font-bold text-center pt-8 text-lg'>Register your Account</h3>

//             {/* <label htmlFor="name">Name</label> */}
//             <input className={tailwindInputBtn}
//               onChange={handleFormInput}
//               type="text"
//               name="name"
//               value={formInfo.name}
//               placeholder='Name'
//               required
//             />

//             {/* <label htmlFor="email">Email</label> */}
//             <input className={tailwindInputBtn}
//               onChange={handleFormInput}
//               type="text"
//               name="email"
//               value={formInfo.email}
//               placeholder='Email'
//               required
//             />

//             {/* <label htmlFor="mobile">Mobile</label> */}
//             <input className={tailwindInputBtn}
//               onChange={handleFormInput}
//               type="text"
//               name="mobile"
//               value={formInfo.mobile}
//               placeholder='Mobile'
//               required
//             />

//             {/* <label>Category</label> */}
//             <select className={`${tailwindInputBtn} text-gray-500`} name="category" onChange={handleFormInput} value={formInfo.category}>
//               <option value="">Select</option>
//               <option value="A">A</option>
//               <option value="B">B</option>
//               <option value="C">C</option>
//               <option value="D">D</option>
//             </select>

//             {/* <label>Comment</label> */}
//             <textarea className={`${tailwindInputBtn} w-80 h-20 rounded`}
//               onChange={handleFormInput}
//               name="comment"
//               value={formInfo.comment}
//               rows={4}
//               placeholder='Comment'
//             />

//             <button className="tailwindsubmitbtn" type="submit">Submit</button>
//             {/* <button className='bg-slate-600 h-8 px-2 rounded' type="button" onClick={() => setIsInfoModelOpen(false)}>   Close  </button> */}

//           </form>
//         </section>
//       )}

//     </>
//   );
// }

// export default Login;

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import logo from "../src/logo/infinis.png"
import infinis from "../src/logo/infinis.png"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


function Login() {

  const tailwindInputBtn = " w-full h-10 border border-gray-300 rounded-lg px-3 text-black outline-none";

  const [StatusBtn, setStatusBtn] = useState(false);
  const [isInfoModelOpen, setIsInfoModelOpen] = useState(false);
  const [status, setStatus] = useState(true)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "",
    comment: ""
  });


  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        "https://crm-softwere.onrender.com/user/login",
        formData
      );
      console.log("ye aa rha hai ya nhi ", resp.data)
      if (resp.data.success) {
        localStorage.setItem("userId", resp.data.userId);
        localStorage.setItem("email", resp.data.email);
        localStorage.setItem("role", resp.data.role);

        const role = resp.data.role.toLowerCase();

        if (role === "superadmin") {
          alert("Welcome to SuperAdmin");
          navigate("/dashboard");
        }
        else if (role === "admin") {
          alert("Welcome to Admin");
          navigate("/admindashboard");
        }
        else if (role === "superauditor") {
          alert("Welcome to Super Auditor");
          navigate("/superauditor");
        }
        else if (role === "cxo") {
          alert("Welcome to CXO");
          navigate("/cxodashboard");
        }
      }

    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        alert("Wrong password!");
      } else {
        alert("Invalid Credentials ya User nahi mila");
      }
    }
  };

  const viewForm = () => {
    setStatus(false)
    setIsInfoModelOpen(true);

  };

  const handleFormInput = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://crm-softwere.onrender.com/admin/adminRegister",
        formInfo
      );
      setFormInfo("");


      if (response.data.success) {
        alert("Request submitted successfully ");


        setFormInfo({
          name: "",
          email: "",
          mobile: "",
          category: "",
          comment: ""
        });


        setIsInfoModelOpen(false);
      }

    } catch (error) {
      console.log(error);
      alert("Error submitting form ");
    }
  };

  const ForgotPassword = async (userId) => {
    try {
      await axios.post(`https://crm-softwere.onrender.com/admin/${userId}`, {
        ForgotPassword: true
      });
      setStatusBtn(true);
    } catch (error) {
      alert("not working");
    }
  };


  
  return (
    <>
  <div className='bg-[#F1F4F9] '>
        <div className='flex items-center py-4 bg-[#252b36] text-white justify-between  px-6' >
        
            <ul className='flex gap-4 items-center'>
              <img className='w-13 h-8' src={infinis} />
              <li className='text-[1.125rem] font-bold '>Infinis Q Panel</li>
            </ul>

            <div className='flex gap-6'>
              <span >support </span>
              <span >setting </span>
            </div>
          
        </div>
    

      {status &&
        <section className='bg-cover my-10 bg-center h-full w-full flex items-center justify-center'>

          <form
            className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
            onSubmit={submit}
          >

            <div className="flex justify-center mb-6">
              <img className="w-16" src={logo} />

            </div>

            <h2 className='text-center text-xl font-semibold text-gray-800'>Login to your account</h2>
            <p className='text-center text-sm text-gray-500 mb-6'>Enter your credentials below</p>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Username</label>
              <input
                className={tailwindInputBtn}
                onChange={handleInputChange}
                type="text"
                name="email"
                value={formData.email}
                placeholder="impetus@gmail.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Password</label>
              <input
                className={tailwindInputBtn}
                onChange={handleInputChange}
                type="password"
                name="password"
                value={formData.password}
                placeholder="*****"
                required

              />
            </div>

            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember
              </label>
              <button type="button" onClick={ForgotPassword} className="text-blue-600">Forgot password?</button>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg" type="submit">Sign in</button>


            <div className='flex justify-center mt-4'>
              <button className='bg-blue-600 hover:bg-blue-700 h-8 px-3 rounded text-white ' onClick={viewForm}>Request Access</button>
            </div>


            <div className="flex items-center my-6">
              <div className="flex-grow border-t"></div>
              <span className="mx-3 text-sm text-gray-400">or sign in with</span>
              <div className="flex-grow border-t"></div>
            </div>

            <div className='text-center text-[15px] text-slate-400'> Don't have an account ? </div>


          </form>

        </section>}
        </div>
      {isInfoModelOpen && (

        <section className='bg-[#F1F4F9] h-screen w-screen flex items-center justify-center'>
          <form
            className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
            onSubmit={handleFormSubmit}>
            <h3 className='text-center text-xl font-semibold text-gray-800 mb-6'>
              Register your Account
            </h3>
            <div className="mb-4">
              <input
                className={tailwindInputBtn}
                onChange={handleFormInput}
                type="text"
                name="name"
                value={formInfo.name}
                placeholder='Name'
                required
              />
            </div>
            <div className="mb-4">
              <input
                className={tailwindInputBtn}
                onChange={handleFormInput}
                type="text"
                name="email"
                value={formInfo.email}
                placeholder='Email'
                required
              />
            </div>

            <div className="mb-4">
              <input
                className={tailwindInputBtn}
                onChange={handleFormInput}
                type="text"
                name="mobile"
                value={formInfo.mobile}
                placeholder='Mobile'
                required
              />
            </div>

            <div className="mb-4">
              <select
                className={`${tailwindInputBtn} text-gray-500`}
                name="category"
                onChange={handleFormInput}
                value={formInfo.category}
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div className="mb-6">
              <textarea
                className={`${tailwindInputBtn} h-20 rounded`}
                onChange={handleFormInput}
                name="comment"
                value={formInfo.comment}
                rows={4}
                placeholder='Comment'
              />
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              type="submit"
            >
              Submit
            </button>

          </form>
        </section>

        // <section className='bg-[#F1F4F9] bg-cover bg-center h-screen w-screen flex items-center justify-center'>
        //   <form className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 grid px-10 card  text-white  bg-white/10 backdrop-blur-md" onSubmit={handleFormSubmit}>

        //     <h3 className='font-bold text-center pt-8 text-lg'>Register your Account</h3>

        //     <input className={tailwindInputBtn}
        //       onChange={handleFormInput}
        //       type="text"
        //       name="name"
        //       value={formInfo.name}
        //       placeholder='Name'
        //       required
        //     />

        //     <input className={tailwindInputBtn}
        //       onChange={handleFormInput}
        //       type="text"
        //       name="email"
        //       value={formInfo.email}
        //       placeholder='Email'
        //       required
        //     />

        //     <input className={tailwindInputBtn}
        //       onChange={handleFormInput}
        //       type="text"
        //       name="mobile"
        //       value={formInfo.mobile}
        //       placeholder='Mobile'
        //       required
        //     />

        //     <select className={`${tailwindInputBtn} text-gray-500`} name="category" onChange={handleFormInput} value={formInfo.category}>
        //       <option value="">Select</option>
        //       <option value="A">A</option>
        //       <option value="B">B</option>
        //       <option value="C">C</option>
        //       <option value="D">D</option>
        //     </select>

        //     <textarea className={`${tailwindInputBtn} h-20 rounded`}
        //       onChange={handleFormInput}
        //       name="comment"
        //       value={formInfo.comment}
        //       rows={4}
        //       placeholder='Comment'
        //     />

        //     <button className="tailwindsubmitbtn" type="submit">Submit</button>

        //   </form>
        // </section>

      )}

    </>
  );
}

export default Login;