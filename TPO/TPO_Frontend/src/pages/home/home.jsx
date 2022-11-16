import Footer from '../../component/core/footer';
import './home.css';
import React, { useState } from 'react';
import Form from '../../component/common/form/form-signUp1';
import { Link } from 'react-router-dom';


const HomePage = props => {

    const [Signup, setSignup] = useState(false);



    const HandelSignUp = () => {

        console.log("signUp button is active !");
        setSignup(true);

    }


    return (


        <>
            <div className='home-wrapper'>
                <div className="SginButtons">
                    <button className='btn' type="button" onClick={HandelSignUp}>Sign up</button>
                    <h2>OR</h2>
                    <Link to={'/login'} className='btn' type="button">Sign in</Link>
                </div>
                <Form  trigger={Signup} setTrigger={setSignup} />
            </div>



            <footer>
                <Footer />
            </footer>
        </>

    );


}
export default HomePage;