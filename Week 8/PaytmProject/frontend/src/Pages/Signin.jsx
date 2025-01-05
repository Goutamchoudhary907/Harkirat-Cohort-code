// import { BottomWarning } from "../components/BottomWarning"
// import { Button } from "../components/Button"
// import { Heading } from "../components/Heading"
// import { InputBox } from "../components/InputBox"
// import { SubHeading } from "../components/SubHeading"

// export const Signin=() =>{
//     return <div className="bg-slate-300 h-screen flex justify-center">
//         <div className="flex flex-col justify-center">
//             <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//               <Heading label={"Sign in"}/>
//               <SubHeading label={"Enter your credentails to access your account"}/>
//                <InputBox placeholder="goutam@gmail.com" label={"Email"}/>
//                <InputBox placeholder="123456" label={"Passowrd"}/>
//                <div className="pt-4">
//                 <Button label={"Sign in"}/>
//                </div>
//                <BottomWarning label={"Don't have an account"} buttontext={"Sign up"} to={"/signup"}/>
//             </div>
//         </div>
//     </div>
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading } from '../components/SubHeading';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import  Button from '../components/Button';
import { BottomWarning } from '../components/BottomWarning';
import axios from 'axios';

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                username: email,
                password: password
            });
            // Handle successful sign-in (e.g., save token, redirect)
            console.log('Sign-in successful:', response.data);
            navigate('/dashboard'); // Redirect to dashboard or another page
        } catch (error) {
            // Handle sign-in error
            console.error('Sign-in error:', error);
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox
                        placeholder="goutam@gmail.com"
                        label={"Email"}
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <InputBox
                        placeholder="123456"
                        label={"Password"}
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className="pt-4">
                        <Button label={"Sign in"} onClick={handleSignin} />
                    </div>
                    <BottomWarning label={"Don't have an account"} buttontext={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};