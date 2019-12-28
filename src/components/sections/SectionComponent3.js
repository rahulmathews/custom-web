import React from 'react';

import Image1 from '../../images/image-03.png';
import Image2 from '../../images/signature.png';

const SectionComponent3 = () => {
    return (
        <section id="about-5" className="pt-100 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">


                    <div className="col-lg-6">
                        <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
                            <img className="img-fluid" src={Image1} alt="about-image" />
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">

                            <span className="section-id blue-color">Welcome to MedService</span>

                            <h3 className="h3-md steelblue-color">Complete Medical Solutions in One Place</h3>

                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat
                                dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer
                                metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta
                                justo integer at velna vitae auctor integer congue
                            </p>

                            <div className="singnature mt-35">

                                <p className="p-small mb-15">Randon Pexon, Head of Clinic</p>

                                
                                <img className="img-fluid" src={Image2} width="200" height="34" alt="signature-image" />	

                            </div>

                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default SectionComponent3;