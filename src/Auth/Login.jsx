
'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [showPassword,setShowPassword] =useState(false);
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (user && pass ) {
          alert(`    Name          : ${user} 
          
          password  : ${pass}`);
        } else {
          alert("please fill completely!!");
        }
      }
  return (
   <div className='flex h-[100vh] justify-center items-center bg-slate-100'>
        <form onSubmit={(e)=>HandleSubmit(e)} className="flex flex-1 max-w-md bg-slate-50 shadow-xl px-[1rem] py-[2rem] rounded-lg  flex-col gap-4">
        <div className="flex flex-col items-center"><h1 className='text-3xl my-5'>RateLab</h1>
            <p className='opacity-70'>Welcome, Sign in to your Account</p>
            </div>
        <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" value={user ||""} onChange={(e)=>setUser(e.target.value)} addon="@" required />
    </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type={showPassword ? "text":"password"} value={pass ||""} onChange={(e)=>setPass(e.target.value)} required />
          </div>
          <div className="flex items-center gap-2">
        <Checkbox id="pass" onChange={()=>setShowPassword(!showPassword)} />
        <Label htmlFor="pass">Show Password</Label>
      </div>
          <div className="flex items-center gap-2">
          
            <span>Don't have an account? </span><Link to={'/register'} className='text-blue-700 underline '>Sign up</Link>
          </div>
          <Button type="submit">Sign in</Button>
        </form>
   </div>
  );
}
