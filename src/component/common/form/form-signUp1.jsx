import { useState } from "react";
import Input from "../input/input";
import './form.css';


const Form = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [id, setId] = useState("");
    const [BD, setBD] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");


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


    const changeRePassword = (e) => {
        let value = e.target.value;
        setRePassword(value);
    }


    const changeID = (e) => {
        let value = e.target.value;
        setId(value);
    }


    const changeBD = (e) => {
        let value = e.target.value;
        setBD(value);
    }

    const changeLocation = (e) => {
        let value = e.target.value;
        setLocation(value);
    }


    const changePhone = (e) => {
        let value = e.target.value;
        setPhone(value);
    }






    return (
        <>
            <div className="wrapper-bg"></div>
            <div className="wrapper">
                <h1>Create A New Account !</h1>
                <form onSubmit={submitHandeller} >


                    <div className="inputs-wrapper">
                        <div className="inputs">
                            <Input
                                label="Full Name"
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
                        </div>
                    
                        <div className="inputs">

                            <Input
                                label="Your ID number"
                                value={id}
                                onChange={changeID}
                                required
                                pattern="\d*"
                                maxlength="14"

                            />
                            <Input
                                label="Date Of Birth"
                                value={BD}
                                onChange={changeBD}
                                required
                                type="date"
                            />
                        </div>
                    </div>
                    <div className="inputs-wrapper">
               
                        <div className="inputs-wrapper">
                            <div className="inputs">
                                <Input
                                    label="Location"
                                    value={location}
                                    onChange={changeLocation}
                                    required
                                    type="text"

                                />
                                <Input
                                    label="Phone Number "
                                    value={phone}
                                    onChange={changePhone}
                                    required
                                    type="tel"
                                />
                            </div>

                        </div>
                        <div className="submit-form-btn">
                            <button type="submit">Create</button>
                            <button type="button ">Cancel</button>
                        </div>

                    </div>



                </form>
            </div>
        </>

    );
}

export default Form;