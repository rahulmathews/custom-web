import React, {Component} from 'react';

//import Local styles here

import HeaderComponent from '../components/HeaderComponent';

import SectionComponent1 from '../components/sections/SectionComponent1';
import SectionComponent2 from '../components/sections/SectionComponent2';
import SectionComponent3 from '../components/sections/SectionComponent3';
import SectionComponent4 from '../components/sections/SectionComponent4';
import SectionComponent5 from '../components/sections/SectionComponent5';
import SectionComponent6 from '../components/sections/SectionComponent6';
import SectionComponent7 from '../components/sections/SectionComponent7';
import SectionComponent8 from '../components/sections/SectionComponent8';
import SectionComponent9 from '../components/sections/SectionComponent9';
import SectionComponent10 from '../components/sections/SectionComponent10';
import SectionComponent11 from '../components/sections/SectionComponent11';

import FooterComponent from '../components/FooterComponent';

class App extends Component {
  
  render(){

    return (
      <React.Fragment>
        <div id="loader-wrapper">
          <div id="loader"><div className="loader-inner"></div></div>
        </div>

        <div id="page" className="page">
          <HeaderComponent />

          <SectionComponent1 />
          <SectionComponent2 />
          <SectionComponent3 />
          <SectionComponent4 />
          <SectionComponent5 />
          <SectionComponent6 />
          <SectionComponent7 />
          <SectionComponent8 />
          <SectionComponent9 />
          <SectionComponent10 />
          <SectionComponent11 />

          <FooterComponent />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
