import React from 'react';

import Image1 from '../../images/video-1.png';

const SectionComponent8 = () => {
    return (
        <section id="video-1" className="wide-60 video-section division">
            <div className="container">
                <div className="row d-flex align-items-center">


                    
                    <div className="col-lg-6">
                        <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">

                                
                            <span className="section-id blue-color">Highest Quality Care</span>

                                
                            <h3 className="h3-md steelblue-color">Solutions to Complex Medical Problems</h3>

                            
                            <div className="box-list">							
                                <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                                <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit
                                </p>							
                            </div>

                            
                            <div className="box-list">	
                                <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                                <p>Gravida quis vehicula magna luctus tempor quisque vel laoreet turpis urna augue, 
                                    viverra a augue eget dictum
                                </p>				
                            </div>

                            
                            <div className="box-list">	
                                <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                                <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit
                                </p>				
                            </div>

                        </div>
                    </div>


                    
                    <div className="col-lg-6">
                        <div className="video-preview mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">

                                                    
                            <a className="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">

                                                            
                                <div className="video-btn play-icon-blue">	
                                    <div className="video-block-wrapper">
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>

                                    
                                <img className="img-fluid" src={Image1} alt="video-photo" />

                            </a>

                        </div>
                    </div>	


                </div>	    
            </div>	    
        </section>
    )
}

export default SectionComponent8;