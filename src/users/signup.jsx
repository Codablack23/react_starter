import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { GridList,TextField,makeStyles, Button } from '@material-ui/core'
import myimg from '../images/myimg.png'
import Customized from './shared_components/grid'
import SecurityIcon from '@material-ui/icons/Security';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextFormatIcon from '@material-ui/icons/TextFormat';

const styles=makeStyles(themes=>(
        {
            inputContainer:{
                border:'none',
                borderRadius:30,
                background:"#393E46",
                width:"100%",
                outline:"none",
                paddingLeft:"12px",
            },
            input:{
               border:'none',
               width:"80%",
               background:"transparent",
               padding:'3% 2%',
               outline:"none",
            },
            button:{
                marginBottom:3,
                border:'none',
                padding:12,
                borderRadius:30,
                width:"100%",
                color:"w3-grey",
                outline:"none",
             }
            
        }
    ))

const SignUp = () => {

    const classes =styles()
    const inputStyle=`${classes.input} w3-text-white`
    const buttonStyle=`${classes.button} w3-green`
    const inputContainer=`${classes.inputContainer}`
    return ( 
        <div className="">
        <Grid container spacing={1}>
               <Grid item xs={12} md={8}>
               <Customized/>
               </Grid>
               <Grid item xs={12} md={4} className="pr-md-5" style={{paddingTop:"5%"}}>
                   <div className="w3-padding-large _ " style={{borderRadius:"45px 45px 45px 45px"}}>
                   <div className="w3-text-white ml-5">
                    
                   <h2 className="d-none d-sm-block">Hey There !</h2>
                   <h2><b>Lets Create Your Account</b></h2>
                   </div>
                   <br/><br/>
                     <div style={{margin:"auto", width:"70%",marginTop:"%"}}>
                   <form className="w3-text-white" >

                   <div>
                       
                       <div className="d-flex">
                            <div className={`${inputContainer} _`} style={{width:"50%"}}>
                            {/* <TextFormatIcon className="w3-text-white" style={{fontSize:18}} /> */}
                                <input type="text" placeholder="First Name" className={inputStyle}/>
                            </div>
                            <div className={`${inputContainer} _ ml-2`} style={{width:"50%"}}>
                            {/* <TextFormatIcon className="w3-text-white" style={{fontSize:18}} /> */}
                                <input type="text" placeholder="Last Name" className={inputStyle}/>
                            </div>
                       </div><br/>
                       <div className={`${inputContainer} _`}>
                       <AlternateEmailIcon className="w3-text-white" style={{fontSize:18}} />
                           <input type="email" placeholder="Enter Your Email" className={inputStyle}/>
                       </div><br/>
                       <div className={`${inputContainer} _`}>
                           <SecurityIcon className="w3-text-white" style={{fontSize:17}} />
                           <input type="password" placeholder="Password" className={inputStyle}/>
                       </div><br />
                       <div className={`${inputContainer} _`}>
                           <SecurityIcon className="w3-text-white" style={{fontSize:17}} />
                           <input type="password" placeholder="Confirm Password" className={inputStyle}/>
                       </div><br />
                       <div className={inputContainer + ' w3-green'}> <button type="submit" id='submit-btn' className={buttonStyle} >REGISTER</button></div><br/>
                       
                   </div>
                   </form>
                     </div>
                   </div>
               </Grid>
         </Grid>
      </div>
     );
}
 
export default SignUp;