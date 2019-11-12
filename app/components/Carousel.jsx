import React from 'react';
import './../assets/scss/main.scss';



export default class Carousel extends React.Component {
	
	render() {
		return(
			
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block w-100" src="./../assets/images/a.png" alt="First slide"/>
			    </div>
			    <div className="carousel-item">
			      <img class="d-block w-100" src="./../assets/images/b.png" alt="Second slide"/>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./../assets/images/c.png" alt="Third slide"/>
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>


			);
	}
}



