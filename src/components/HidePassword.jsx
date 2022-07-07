import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(e)=>{
        setPasswordInput(e.target.value);
    }
    const togglePassword =(e)=>{
        e.preventDefault();
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

                <div className="relative">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="p-3 my-2 w-full rounded outline-none text-black" placeholder="Password" />
                    
                     <button onClick={togglePassword}>
                     { passwordType==="password"? <AiOutlineEyeInvisible class="text-black top-6 right-5 opacity-40 absolute"/> :<AiOutlineEye class="text-black top-6 right-5 opacity-40 absolute"/> }
                     </button>
                    
                </div>
                
      
    )

}
export default ShowAndHidePassword;