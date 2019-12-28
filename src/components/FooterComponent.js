import React from 'react';

import Image1 from '../images/footer-logo.png';

const FooterComponent = () => {
    return (
        <footer id="footer-1" className="wide-40 footer division">
            <div className="container">


                
                <div className="row">	


                    
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-info mb-40">

                            
                            
                            <img src={Image1} width="180" height="40" alt="footer-logo" />

                                
                            <p className="p-sm mt-20">Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta
                                justo at velna auctor congue
                            </p>  

                            
                            <div className="footer-socials-links mt-20">
                                <ul className="foo-socials text-center clearfix">

                                    <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="ico-twitter"><i className="fab fa-twitter"></i></a></li>	
                                    <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr"></i></a></li>			
                                                                                                                                    

                                </ul>									
                            </div>	
                        
                        </div>		
                    </div>


                    
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-box mb-40">
                        
                            
                            <h5 className="h5-xs">Our Location</h5>

                            
                            <p>121 King Street, Melbourne,</p> 
                            <p>Victoria 3000 Australia</p>
                            
                            
                            <p className="foo-email mt-20">E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>

                            
                            <p>P: +12 9 8765 4321</p>

                        </div>
                    </div>


                    
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-box mb-40">
                        
                            
                            <h5 className="h5-xs">Working Time</h5>

                            
                            <p className="p-sm">Mon - Wed - <span>9:00 AM - 7:00 PM</span></p>
                            <p className="p-sm">Thursday - <span>9:00 AM - 6:30 PM</span></p>
                            <p className="p-sm">Friday - <span>9:00 AM - 6:00 PM</span></p>
                            <p className="p-sm">Sat - Sun - <span>Closed</span></p>							

                        </div>
                    </div>


                    
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-box mb-40">
                                            
                            
                            <h5 className="h5-xs">Emergency Cases</h5>

                            
                            <h5 className="h5-xl blue-color">1-800-123-4560</h5>

                                
                            <p className="p-sm mt-15">Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta
                                justo velna aucto magna
                            </p> 																												

                        </div>
                    </div>	


                </div>	  


                
                <div className="bottom-footer">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="footer-copyright">&copy; 2019 <span>MedService</span>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>


            </div>	   										
        </footer>
    );
}

export default FooterComponent