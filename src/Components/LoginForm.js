import React from "react";

export default function LoginForm() {

    const [formData, setFormData] = React.useState({
        email: "", password: "", confirmPassword: "", newsletter: false
    })

    function handleChange(event) {
        let {name, value, type, checked} = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                // [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            console.log("success")
        } else {
            console.log("fail")
        }

        if(formData.newsletter === true){
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return(
        <div className="form-container">
            <form className="form-below" onSubmit={handleSubmit}> 
                <input placeholder="Enter the email" type="email" className="form--input" name="email" value={formData.email} onChange={handleChange}/>
                <input placeholder="Enter the password" type="password" className="form--input" name="password"  value={formData.password} onChange={handleChange} />
                <input placeholder="Confirm password" type="password" className="form--input" name="confirmPassword"  value={formData.confirmPassword} onChange={handleChange}/>
                <div className="form--marketing">
                    <input type="checkbox" id="okayToEmail" name="newsletter" checked={formData.newsletter} onChange={handleChange}/>
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    );
}