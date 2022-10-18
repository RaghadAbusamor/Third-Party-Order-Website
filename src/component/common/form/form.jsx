import { useState } from "react";
import Input from "../input/input";
import './form.css';


const Form = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const submitHandeller = (e) => {
        e.preventDefault();
        /*
         * @type {HTMLFormElement} 
        */
        const target = e.target;

    }

    const changeName = (e) => {
        let value = e.target.value;
        setName(value);
    }

    const changeEmail = (e) => {
        let value = e.target.value;
        setEmail(value);
    }
    const changePassword = (e) => {
        let value = e.target.value;
        setPassword(value);
    }






    return (
        <div className="wrapper-bg">
            <div className="wrapper">
                <form onSubmit={submitHandeller} >
                    <h1>Creatr new account !</h1>

                    <Input
                        label="Name"
                        value={name}
                        onChange={changeName}
                        required
                        type="text" />
                    <Input

                        label="E-mail"
                        value={email}
                        onChange={changeEmail}
                        required
                        type="email"
                    />

                    <Input
                        label="re-type password"
                        value={password}
                        onChange={changePassword}
                        required
                        type="password"
                    />
                    <div className="submit-form-btn">

                        <button type="submit">Create</button>
                        <button type="button ">Cancel</button>



                    </div>

                </form>
            </div>
        </div>
    );
}

export default Form;