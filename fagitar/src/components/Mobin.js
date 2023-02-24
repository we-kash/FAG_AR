import React from "react"

export default function Login() {
    return (
 <div class="container">
        <div class="Loginfag">
        
        <div class="logbuttons">
            <h1 class="fagitar">FAGITAR</h1>
            <button class="signin button" type="button">Sign in</button>
            <button class="signup button" type="button">Sign up</button><hr/>
            <button class="skip button" type="button">skip</button>
        </div>
       
    </div>
    <div class="dividing-line"></div>
    <div>
        <div class="SmartPhone">
            <h3>Create Account</h3>
            <p>Please enter the email from which you want to continue</p>
            <input type="mail" id="email"/>
            <p>already have an account?</p>
            <h4>or</h4>
            <button class="Verify-button"type="button">Verify Now</button>
        </div>
    </div>
</div>
) }