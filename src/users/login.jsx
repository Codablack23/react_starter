import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { GridList,TextField,makeStyles, Button } from '@material-ui/core'
import myimg from '../images/myimg.png'
import Customized from './shared_components/grid'
import SecurityIcon from '@material-ui/icons/Security';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const styles=makeStyles(themes=>(
    {
        inputContainer:{
            borderRadius:30,
            width:"100%",
            color:"white",
            background:"#393E46",
            outline:"none",
        },
        input:{
           border:'none',
           width:"80%",
           padding:'2%',
           outline:"none",
           background:"none",
           color:"white",
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

const Login = () => {
    const classes =styles()
    const inputStyle=`${classes.input}`
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
                    
                   <h2 className="d-none d-sm-block">Hello User !</h2>
                   <h2><b>Lets Sign You In</b></h2>
                   </div>
                   <br/><br/>

                     <div style={{margin:"auto", width:"70%",marginTop:""}}>
                     <div className="w3-center">
                     <AccountCircleIcon className="w3-text-grey w3-center" style={{fontSize:"120px"}} />
                     </div><br/>
                   <form className="w3-text-white" >
                   <div>
                       <div className={`${inputContainer} _`}>
                       <PermIdentityIcon className="w3-text-white" style={{fontSize:18}} />
                           <input placeholder="Username" className={inputStyle}/>
                       </div><br/>
                       <div className={`${inputContainer} _`}>
                           <SecurityIcon className="w3-text-white" style={{fontSize:17}} />
                           <input placeholder="Password" className={inputStyle}/>
                       </div><br />
                       <div className={inputContainer + ' w3-green'}> <button type="submit" id='submit-btn' className={buttonStyle} >SUBMIT</button></div>
                       
                       <p className="w3-text-grey">Forgot Password?</p>
                   </div>
                   </form>
                     </div>
                   </div>
               </Grid>
         </Grid>
      </div>
     );
}
 
export default Login;