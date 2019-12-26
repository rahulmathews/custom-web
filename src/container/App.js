import React, {Component} from 'react';

//import Local styles here

import HeaderComponent from '../components/HeaderComponent';


//Global scripts
// import '../plugins/js/jquery-3.3.1.min.js';
// import '../plugins/js/bootstrap.min.js';
// import '../plugins/js/modernizr.custom.js';
// import '../plugins/js/jquery.easing.js';
// import '../plugins/js/jquery.appear.js';
// import '../plugins/js/jquery.stellar.min.js';
// import '../plugins/js/menu.js';
// import '../plugins/js/sticky.js';
// import '../plugins/js/jquery.scrollto.js';
// import '../plugins/js/materialize.js';
// import '../plugins/js/owl.carousel.min.js';
// import '../plugins/js/jquery.magnific-popup.min.js';
// import '../plugins/js/imagesloaded.pkgd.min.js';
// import '../plugins/js/isotope.pkgd.min.js';
// import '../plugins/js/hero-form.js';
// import '../plugins/js/contact-form.js';
// import '../plugins/js/comment-form.js';
// import '../plugins/js/appointment-form.js';
// import '../plugins/js/jquery.datetimepicker.full.js';
// import '../plugins/js/jquery.validate.min.js';
// import '../plugins/js/jquery.ajaxchimp.min.js';
// import '../plugins/js/wow.js';

class App extends Component {
  
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "src/plugins/js/jquery.datetimepicker.full.js";
    script.async = true;

    document.body.appendChild(script);
  }
  
  render(){

    return (
      <React.Fragment>
        <div id="loader-wrapper">
          <div id="loader"><div class="loader-inner"></div></div>
        </div>

        <div id="page" class="page">
          <HeaderComponent />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
