import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    const [confirmPassError, setConfirmPassError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [emailerror, setEmailerror] = useState(false);
    const [showPassword,setShowPassword] =useState(false);

      
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (user && email && pass && cpass && pass===cpass) {
      alert(`    Name          : ${user} 
      email         : ${email}
      password  : ${cpass}`);
    } else {
      alert("please fill completely!!");
    }
  }
  const confirmPass = (e) => {
    const { value } = e.target;

    if (value === pass) {
      setConfirmPassError(false);
      setCpass(value);
    } else {
      setConfirmPassError(true);
      setCpass(value);
    }
  };

  const validatePass = (e) => {
    const { value } = e.target;
    if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      setPassError(false);
      setPass(value);
    } else {
      setPassError(true);
      setPass(value);
    }
  };

  const validateEmail = (e) => {
    const { value } = e.target;
    if (value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
      setEmailerror(false);
      setEmail(value);
    } else {
      setEmailerror(true);
      setEmail(value);
    }
  };


    
    
  return (
    <div className="flex h-[100vh] justify-center items-center bg-slate-100">
      <form onSubmit={(e)=>HandleSubmit(e)} className="flex flex-1 max-w-md bg-slate-50 shadow-xl px-[1rem] py-[2rem] rounded-lg  flex-col gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl my-4">RateLab</h1>
          <p className="opacity-70">Hai ,Welcome to Ratelab, Please Sign up</p>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="username3" value="Username" />
          </div>
          <TextInput
            id="username3"
            placeholder="joe123"
            addon="@"
            value={user || ""}
            onChange={(e)=>{setUser(e.target.value)}}
            required
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            icon={HiMail}
            placeholder="name@gmail.com"
            value={email || ""}
            color={emailerror ? "failure" : null}
            onChange={(e)=>{validateEmail(e)}}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" 
          type={showPassword ? "text" : "password" }

          value={pass ||""}
          onChange={(e)=>validatePass(e)}
          placeholder="Name1234"
          color = {passError ? "failure" :null}
          helperText={ passError &&
            <>
              <span className="">[A-Z][a-z][0-9] at least 8 characters</span> 
            </>
          }
           required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="passwordconfirm" value="Confirm password" />
          </div>
          <TextInput id="passwordconfirm" 
          type={showPassword ? "text" : "password" } 

          value={cpass ||""}
          onChange={(e)=>confirmPass(e)}
          color={(confirmPassError ? "failure":"null")}
          required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="pass" onChange={()=>setShowPassword(!showPassword)} />
          <Label htmlFor="pass">Show Password</Label>
        </div>
        <div className="flex items-center gap-2">
          <span>Already have an account? </span>
          <Link to={"/login"} className="text-blue-700 underline ">
            Sign in
          </Link>
        </div>

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
