import { useState } from "react";

function LoginForm(){
    let [password, setPassword] = useState('');
    let [loginButton, setLoginButton] = useState(true);

    function onPasswordChange(e){
        setPassword(e.target.value);
        if(password.length >= 7){
            setLoginButton(false);
        }
        else{
            setLoginButton(true)
        }
    }


    function form_handler(e){
        e.preventDefault();

    }
    return(
        <div className="bg-slate-100">
        <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-center text-gray-700">Login</h1>
            <form class="space-y-4" onSubmit={form_handler}>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email Address" class="w-full input input-bordered" required/>
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        class="w-full input input-bordered" value={password} onChange={onPasswordChange}/>
                </div>
                <div>
                    <button class="btn btn-block" disabled={loginButton}>Login</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}
export default LoginForm;