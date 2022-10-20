import Footer from '../../component/core/footer';
import './home.css';
import React, { useState } from 'react';
import Form from '../../component/common/form/form-signUp1';


const HomePage = props => {

    const [width, setWindowWidth] = useState(0);
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }


    return (


        <>
            <div className='home-wrapper'>
                <div className="SginButtons">
                    <button className='btn' type="button">Sign up</button>
                    <h2>OR</h2>
                    <button className='btn' type="button">Sign in</button>
                </div>
                <Form />
            </div>
          
     

            <footer>
                <Footer />
            </footer>
        </>

    );


}
export default HomePage;