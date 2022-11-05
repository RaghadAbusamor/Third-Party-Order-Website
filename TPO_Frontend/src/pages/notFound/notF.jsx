
import './notF.css';
import { Link } from 'react-router-dom';

const NFound = () => {
    return (
        <>
        <div className="wrapper404"></div>
            <div class="jc-elevator">
                <div id="myBtn" class="jc-floor">
                    <h3>404</h3>
                </div>
                <div id="doors" class="jc-doors">

                    <div>Ops... <br/> Wrong floor</div>
                    <div>Go Through Elevator Buttons</div>
                </div>

                <div class="jc-switch">
                    <Link  to={'/user'}></Link >
                    <Link  to={'/home'}></Link>
                </div>
            </div>
        </>
    );
}

export default NFound;