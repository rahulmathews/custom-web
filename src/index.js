import React from 'react';
import ReactDOM from 'react-dom';

//Global Styles

import "./css/globals/flaticon.css";
import "./css/globals/menu.css";
import "./css/globals/dropdown-effects/fade-down.css";
import "./css/globals/magnific-popup.css";	
import "./css/globals/owl.carousel.min.css";
import "./css/globals/owl.theme.default.min.css";
import "./css/globals/animate.css";
import "./css/globals/jquery.datetimepicker.min.css";
        
import "./css/globals/style.css";
import "./css/globals/responsive.css"; 

import "./css/globals/bootstrap.min.css";

        
//Main Container
import App from './container/App';


import * as serviceWorker from './serviceWorker';


//Main Entry Point
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
