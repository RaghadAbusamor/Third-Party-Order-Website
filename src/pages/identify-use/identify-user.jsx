import Footer from '../../component/core/footer';
import './identify-user.css';
import { Link } from 'react-router-dom';



const UserPage = props => {


    return (


        <>
            <div className='user-wrapper'>
                <div className="SginButtons">
                    <h2> YOU ARE : </h2>
                    {/* <button className='btn'>Company</button> */}
                    <Link className='btn' to="/home">Company</Link>
                    <h2>OR</h2>
                    <Link className='btn'  >User</Link>
                </div>
            </div>



            <footer>
                <Footer />
            </footer>
        </>

    );


}
export default UserPage;