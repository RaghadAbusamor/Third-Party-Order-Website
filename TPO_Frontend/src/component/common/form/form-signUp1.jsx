import { useState } from "react";
import Input from "../input/input";
import { useNavigate } from 'react-router-dom';


import './form.css';


const Form = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [id, setId] = useState("");
    const [BD, setBD] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();


    const submitHandeller = (e) => {

        e.preventDefault();
        /*
         * @type {HTMLFormElement} 
        */
        const target = e.target;
        navigate("/home/patron");
        // navigate('/sginup', {replace: true});
        console.log("form submitted");
    }
    const changeName = (e) => {
        let value = e.target.value;
        setName(value);
    }
    const changeEmail = (e) => {
        let value = e.target.value;
        setEmail(value);
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

    return props.trigger ? (

        <>
            <div className="wrapper-bg" onClick={() => props.setTrigger(false)}  ></div>
            <div className="wrapper">
                <h1>Create A New Account !</h1>
                <form onSubmit={submitHandeller} action="https://formspree.io/f/xaykpbbq" method="post" >


                    <div className="inputs-wrapper">
                        <div className="inputs">
                            <Input
                                label="Full Name"
                                value={name}
                                name="Your name"
                                onChange={changeName}
                                required
                                type="text"
                            />
                            <Input
                                name="Your email"

                                label="E-mail"
                                value={email}
                                onChange={changeEmail}
                                required
                                type="email"
                            />
                        </div>

                        <div className="inputs">

                            <Input
                                name="Your ID "
                                label="Your ID number"
                                value={id}
                                onChange={changeID}
                                required
                                pattern="\d*"
                                maxLength="14"

                            />
                            <Input
                                name="Birth Date"
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
                                    name="location "
                                    value={location}
                                    onChange={changeLocation}
                                    required
                                    type="text"

                                />
                                <Input
                                    name="Phone Number"
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
                            <button type="button " onClick={() => props.setTrigger(false)}>Cancel</button>

                        </div>


                    </div>



                </form>
            </div>
        </>

    ) : "";
}

export default Form;