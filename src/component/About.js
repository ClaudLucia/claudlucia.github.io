import React, { Component } from 'react';

class About extends Component{
    render() {
        let resumeData = this.props.resumeData;
            return (
                <section id="about">
                    <div className="row">
                    <div className="twelve columns header-col">
                        <h1>About Me</h1>
                        <p>
                            {
                                resumeData.aboutme
                            }
                        </p>
                    </div>
                    </div>
                </section>
            );
    }
}
export default About;