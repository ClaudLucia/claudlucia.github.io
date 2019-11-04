import React, { Component } from 'react';

class About extends Component{
    render() {
        let resumeData = this.props.resumeData;
            return (
                <section id="about">
                    <div className="nine columns main-col">
                        <h1>About Me</h1>
                        <p>
                            {
                                resumeData.aboutme
                            }
                        </p>
                    </div>
                </section>
            );
    }
}
export default About;