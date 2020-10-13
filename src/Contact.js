import React from 'react'
import './Contact.css'
import EmailIcon from '@material-ui/icons/Email';
import CopyrightIcon from '@material-ui/icons/Copyright';
function Contact() {
    return (
        <div className="contact" id="contactus">
            <h1 style={{padding:"15px"}}>Contact Us</h1>
            <p style={{padding:"15px", fontSize:"20px"}}>Please reach out to us …</p>
            <div>
                <ul>
                    <li>If you want to collaborate on industrial hardware product design in 5G and
                        IoT space
                    </li>
                    <li>
                        If you are a freelance/ engineering consultant, we have interesting
                        opportunities for you
                    </li>
                    <li>
                        If you are passionate about training students and engineers in latest 5G
                        technologies
                    </li>
                </ul>
                <p className="address">
                    The company is incubated @<br/>

                    Deshila Technology Research Institute<br/>

                    SJCE-STEP, JSS Technical Institutions Campus, Manasagangothri, Mysuru – 570006
                </p>
            </div>
            <div className="email">
              
            <EmailIcon className="email__icon"/>
            
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>

                <CopyrightIcon/>
                <div style={{display:'flex',alignItems:"center"}}><p style={{color:"#621E3C"}}>Deshila Technology Research Institute</p></div>
            </div>
        </div>
    )
}

export default Contact
