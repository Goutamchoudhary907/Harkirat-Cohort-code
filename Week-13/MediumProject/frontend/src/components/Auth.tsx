import { ChangeEvent, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {SignupInput} from '@goutamchoudhary/medium-common'
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate=useNavigate();
    const [postInputs, setPostInputs]= useState<SignupInput>({
        email:"",
        password:"",
        name: ""
    })

   async function sendRequest(){
      try {
        console.log(axios.defaults.headers.common); 
        console.log(postInputs);
        
        const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type ==='signup' ? "signup":"signin"}`, postInputs)

        if (type === "signup") {
          const jwt = response.data;
          localStorage.setItem("token", jwt);
          localStorage.setItem("userName", postInputs.email);
          alert("Signup successful. Please sign in.");
          navigate("/signin");
      } else {
          const jwt = response.data;
          localStorage.setItem("token", jwt);
          localStorage.setItem("userName", postInputs.email);
          navigate("/blogs");
      }
        // const token=response.data;
        // localStorage.setItem("token",token)
        // navigate("/blogs"); 
      }catch (e) {
        console.log("Invalid inputs");
        
    }
    
    }
    return <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                <div className='px-10'>
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-500">
                    {type === "signin" ? "Don't have an account?" :"Already have an account?"}
                    <Link className='pl-2 underline' to={type === 'signin' ? "/signup" : "/signin"}> 
                    {type === 'signin' ? "Sign up" : "Sign in"}
                    </Link>
                </div>
                </div>
                <div className='pt-8'>
                {type === "signup"? <LabelledInput type="text" label="Name" placeholder='Enter your name'  onChange={(e) => {
                              setPostInputs({
                                ...postInputs,
                                name:e.target.value
                              })
                            }} /> :null}

                <LabelledInput label="Email" placeholder='Enter your email' onChange={(e) => {
                              setPostInputs({
                                ...postInputs,
                                email:e.target.value
                              })
                            }}/>

                <LabelledInput   type={"password"} label="Password" placeholder='Enter your password' onChange={(e) => {
                              setPostInputs({
                                ...postInputs,
                                password:e.target.value
                              })
                            }}/>

                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
                dark:focus:ring-gray-700 dark:border-gray-700">{type === 'signup' ? "Sign up" : "Sign in"}</button>

                </div>
                </div>
            </div>
        </div>
};
   interface LabelledInputType{
    label:string ;
    placeholder:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string;
   }

    function LabelledInput({ label , placeholder, onChange, type } : LabelledInputType) {
        return  <div>
        <label className=" block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type ||"text"} id='firstName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
    } 
