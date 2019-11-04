import React, { Component } from "react";

class Resume extends Component {
  render(){
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
      <div className="row education">
        <h1>Resume</h1>
        <div className="three columns header-col">
          <h2><span>Education</span></h2>
        </div>
        <div className="nine columns main-col">
          {
            resumeData.education && resumeData.education.map((item)=>{
              return(
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <h4>{item.location}</h4>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span><em>{item.Achievements}</em><span>&bull;</span><em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                      <h4>Minors</h4>
                      <ul className="minors">
                      
                      {
                        resumeData.minors && resumeData.minors.map((item) => {
                          return(
                            <li>{item.minorName}
                            </li>
                          )
                        })
                      }
                    </ul>
                    </p>
                    
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
            <h2><span>Projects</span></h2>
        </div>
        <div className="nine columns header-col">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
            return(
                <div className="row item">
                    <div className="twelve columns">
                        <h3>{item.name}</h3>
                        <p className="info">
                        {item.description}
                        </p>        
                    </div>
                </div>
            )
            })
          }
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h2><span>Work</span></h2>
        </div>
        <div className="nine columns main-col">
          {
            resumeData.work && resumeData.work.map((item)=>{
              return(
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span> &bull; </span> <em className="date"> {item.DateOfStarting} - {item.DateOfLeaving}</em>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
      <div className="row skill">
        <div className="three columns header-col">
          <h2><span>Skills</span></h2>
        </div>
        <div className="nine columns main-col">
          {/* <p>
            {resumeData.skillsDescription}
          </p> */}
          <div className="bars">
            <ul className="skills">
              {
                resumeData.skills && resumeData.skills.map((item) => {
                  return(
                    <li>
                    <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                    </span><em>{item.skillname}</em>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Resume;