import { useState } from "react";
import { validatePassword } from "../utils/validatePassword";

function RegistrationForm() {
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [email, setEmail] = useState("");
    let [loginButton, setLoginButton] = useState(true);
    let [error, setError] = useState("");

    function onPasswordChange(e) {
        setPassword(e.target.value);
        if (password.length >= 7 && password <= 14) {
            setLoginButton(false);
        }
        else {
            setLoginButton(true)
        }
    }
    function onConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
        if (validatePassword(password, confirmPassword)) {
            setError("Password Match");
        }
        else {
            setError("Password Not Match");
        }
    }
    function onEmailChange(e) {
        setEmail(e.target.value);
    }


    function form_handler(e) {
        e.preventDefault();
        let old_users = localStorage.getItem("users");
        if(old_users == null){
            old_users = "[]";
        }
        old_users = JSON.parse(old_users);
        const user = {
            "email": email,
            "password": password
        }
        old_users.push(user);
        localStorage.setItem("users", JSON.stringify(old_users));
    }
    return (
        <div className="bg-slate-100">
            <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
                <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-center text-gray-700">Registration</h1>
                    <form class="space-y-4" onSubmit={form_handler}>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email Address" class="w-full input input-bordered" required value={email} onChange={onEmailChange} />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password"
                                class="w-full input input-bordered" value={password} onChange={onPasswordChange} />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password"
                                class="w-full input input-bordered" value={confirmPassword} onChange={onConfirmPasswordChange} />
                        </div>
                        <div>
                            <button class="btn btn-block" disabled={loginButton}>Registraion</button>
                        </div>
                    </form>
                </div>
                <h1 className="text-5xl text-red-700">{error}</h1>
            </div>
        </div>
    )
}
export default RegistrationForm;