import React from 'react'
import "./mainpage.css"
import logo from '../src/images/logo_dtri.JPG'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function MainPage() {
    return (
        <div>
            <div  className="mainpage">
                <div className="mainpage__titile">
                    <img src={logo} style={{height:"120px"}} alt="logo"/>
                    {/* <h1>Deshila Technology Research Institute (DTRI)</h1> */}
                    </div>
                    <div className="mainpage__info">
                        <p>Deshila Technology Research Institute (DTRI) is a new age engineering company collaborating with technology companies in 5G and IoT space to research and innovate solutions. Hi-Tech products demand people skilled in advanced engineering concepts. DTRI is on a mission to create highly skilled hardware and system engineers to cater for the futuristic demand of entrepreneurs and organizations in wireless engineering.</p>
                        </div>
                        <div className="mainpage__icons">

                               < LinkedInIcon className="linkedin"fontSize="inherit" onClick={() => window.open('https://www.Linkedin.com')}/>
                            <FacebookIcon  className="facebook"fontSize="inherit" onClick={() => window.open('https://www.Linkedin.com')}/>
                            </div>
                            {/* <div className="expandmore">
                                <div className="more">
                            <ExpandMoreIcon fontSize="large"/>
                            <ExpandMoreIcon fontSize="large"/>
                            <ExpandMoreIcon fontSize="large"/>
                            </div>
                            </div> */}

            </div>
            
            
        </div>
    )
}

export default MainPage
