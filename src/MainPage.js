import React from 'react'
import "./mainpage.css"
import logo from '../src/images/logo_dtri.JPG'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function MainPage() {
    return (
        <div className="mainpage" id="home">
     
                <div className="mainpage__titile">
                  
                    <img src={logo} style={{height:"120px"}} alt="logo"/>
                    </div>
                    <div className="mainpage__info">
                        <p>Deshila Technology Research Institute (DTRI) is a new age engineering company collaborating with technology companies in 5G and IoT space to research and innovate solutions. Hi-Tech products demand people skilled in advanced engineering concepts. DTRI is on a mission to create highly skilled hardware and system engineers to cater for the futuristic demand of entrepreneurs and organizations in wireless engineering.</p>

                        </div>
                        <div className="mainpage__icons">

                        < LinkedInIcon className="linkedin"fontSize="inherit" onClick={() => window.open('https://www.linkedin.com/in/kirancmarathe/')}/>
                            <FacebookIcon  className="facebook"fontSize="inherit" onClick={() => window.open('https://www.linkedin.com/in/kirancmarathe/')}/>
                            </div>
                      
          
                        
</div>
            
            
            

    )
}

export default MainPage
