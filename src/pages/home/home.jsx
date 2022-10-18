import Form from '../../component/common/form/form';
import Footer from '../../component/core/footer';
import './home.css';
const HomePage = props => {

    return (

        
        <>
            <div className='home-wrapper'>
                <div className="SginButtons">
                    <button className='btn' type="button">Sign up</button>
                    <h2>OR</h2>
                    <button className='btn' type="button">Sign in</button>
                </div>
<Form/>
            </div>

            <footer>
                <Footer/>
            </footer>
        </>

    );


}
export default HomePage;