import './form2.css';
import { useState } from "react";
import Input from "../input/input";
import { useNavigate } from 'react-router-dom';



const FormTow = (props) => {
    const [name, setName] = useState("");
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
        console.log("form2 submitted");


    }
    const changeName = (e) => {
        let value = e.target.value;
        setName(value);
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
            <div className="wrapper-bg"   ></div>
            <div className="wrapper">
                <h1>Patron Information</h1>
                <form onSubmit={submitHandeller} action="https://formspree.io/f/xaykpbbq" method="post" >


                    <div className="inputs-wrapper">
                        <div className="inputs">
                            <Input
                                label="Patron Full Name"
                                value={name}
                                name="Your name"
                                onChange={changeName}
                                required
                                type="text" />

                        </div>

                        <div className="inputs">

                            <Input
                                name="Patron Identification Number "
                                label="Your ID number"
                                value={id}
                                onChange={changeID}
                                required
                                pattern="\d*"
                                maxLength="14"

                            />
                            <Input
                                name="Patron Date of Birth"
                                label="Patron Date of Birth"
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
                                    label="Patron Location"
                                    name="location "
                                    value={location}
                                    onChange={changeLocation}
                                    required
                                    type="text"

                                />
                                <Input
                                    name="Patron Phone Number"
                                    label="Patron Phone Number "
                                    value={phone}
                                    onChange={changePhone}
                                    required
                                    type="tel"
                                />
                            </div>

                        </div>

                        <div className="submit-form-btn">
                            <button type="submit"  >Create</button>
                            <button type="button " onClick={
                                () => {
                                    console.log("submission cancelled");
                                    navigate('./user');
                                }}

                            >Cancel</button>
                        </div>

                    </div>



                </form>
            </div>
        </>

    );
}

export default FormTow;