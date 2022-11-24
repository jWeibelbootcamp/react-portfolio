import React from "react";
import ResumePDF from "../assets/downloads/jasonResume.pdf";
import ResumeImage from "../assets/images/resumeScreenshot.png"

function Resume () {
    return (
        <div>
            <h1>
                <a href={ResumePDF}download>
                    <img src={ResumeImage} alt="My Resume" width="80%" />
                </a>
            </h1>
        </div>
    );
};

export default Resume;