import React, {Component} from 'react';
// import './App.css';
// import Projects from './component/Projects.js';

import Header from './component/Header.js';
import About from './component/About.js';
import Resume from './component/Resume.js';
import Contact from './component/Contact.js';
import resumeData from './component/resumeData.js';


class App extends Component {
    render() {
    return (
      <div className="App">
        {/* React apps are single page applications, which means that the whole website is actually one huge page that renders different components when applicable.
        The whole page is an HTML file but React changes th econtents of the page by rendering different components when appropriate */}
        
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        {/* <Projects resumeData={resumeData}/> */}
        <Resume resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
