import flame  from '../../images/flame.png'
import { Link } from 'react-router-dom'

const Customized = () => {

    return (  
      <div className="w3-container w3-text-white w3-center" style={{padding:"3%"}}>
      <div className="d-none d-md-block">
      <img src={flame} className="w3-image" width="400" height="400"/>
      </div>
      <div>
      <img src={flame} className="w3-image .d-block d-md-none .d-sm-none" width="95" height="95"/><br />
      </div>
     <div className="d-none d-sm-block">
     <h2>The Perfect Training</h2>
      <h6 className="w3-text-grey" style={{padding:"0 15%"}}>Welcome To Our Training Section Get Ready And Lets Start To Learn The Basics Of Forex Trade With Perfect Trades</h6>
     </div><br />
      <div className="button_group mt-xs-5 mt-md-1 d-flex w3-center _">
          <div className="w3-green _s "><Link to="/users/register">Sign Up</Link></div>
          <div className="_l w3-padding"><Link to="/users">Login</Link></div>
      </div>
  </div>
    );
}
 
export default Customized;