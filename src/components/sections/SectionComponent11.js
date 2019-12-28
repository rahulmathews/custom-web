import React from 'react';

import Image1 from '../../images/image-05.png';

const SectionComponent11 = () => {
    return (
		<section id="banner-2" className="pt-80 banner-section division">
				<div className="bg-scroll bg-inner bg-image division">
					<div className="container white-color">
						<div className="row d-flex align-items-center">


							
							<div className="col-lg-5">
								<div className="banner-2-img">
									<img className="img-fluid" src={Image1} alt="banner-image" />	
								</div>
							</div>


							
							<div className="col-lg-6 offset-lg-1">
								<div className="banner-txt pc-30 wow fadeInUp" data-wow-delay="0.4s">

										
					 				<span className="section-id id-color">Modern Medicine</span>

									
									<h3 className="h3-lg">Better Technologies for Better Healthcare</h3>

									
									<p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue
									   egestas suscipit lectus mauris lectus laoreet gestas neque undo luctus feugiat.
									   Aliquam a augue suscipit
								    </p>

								    
									<a href="all-doctors.html" className="btn btn-tra-white blue-hover">View Our Doctors</a>

								</div>
							</div>	


						</div>	  
					</div>	   
				</div>				
			</section>
	)
}

export default SectionComponent11;