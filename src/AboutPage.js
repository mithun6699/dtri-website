import React from 'react'
import './About.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function AboutPage() {
    return (
        <div className="about" id="about">
            <div className="about__img">
                <img
                    src="https://media-exp1.licdn.com/dms/image/C5103AQHOcu5b-uYR9A/profile-displayphoto-shrink_800_800/0?e=1608163200&v=beta&t=u5qG0rZ-Y0q_Zn3kSZJmEw6ktEXxIrpChFPMOW9omGs"
                    alt="kiran-marathe-profile"
                    style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "50%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center"
                }}/>
            </div>
            <p className="info-data"><span style={{color:"black"}}> About the Founder : </span><span style={{color:"orange",fontFamily:"cursive",fontWeight:"bold",fontSize:"25px"}}> Kiran C Marathe</span> is passionate about creating a community of hands-on
                engineers with practical experience for the advancement of technology. He has
                many years of experience in world renowned companies like Qualcomm, Intel and
                Larsen&Toubro. With a Masters degree in Microwave Engineering and experience in
                Wireless System Design he is working on various projects and training engineers
                in wireless engineering.

            </p>
            <div className="about__icon">
                <LinkedInIcon className="linkedin" fontSize="inherit" onClick={() => window.open("https://www.linkedin.com/in/kirancmarathe/", "_blank")}/>
            </div>

            {/* <Provide link to LinkedIn profile: www.linkedin.com/in/kirancmarathe></p> */}
        </div>
    )
}

export default AboutPage
