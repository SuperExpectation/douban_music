import React, { PropTypes, Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../node_modules/react-responsive-carousel/lib/styles/carousel.css'
import '../node_modules/react-responsive-carousel/lib/styles/main.css';

class CarouselCom extends Component {
  render() {

    return (
      		<Carousel infiniteLoop={true} showArrows={true} showThumbs={false} showStatus={false} >
                    <div>
                        <img src="./image/carousel/ljj.jpg" />
                        <p className="legend">JJ Lin</p>
                    </div>
                    <div>
                        <img src="./image/carousel/ljr.jpg" />
                        <p className="legend">Fish Leong</p>
                    </div>
                    <div>
                        <img src="./image/carousel/taylor.jpg" />
                        <p className="legend">Taylor Swift</p>
                    </div>
                    <div>
                        <img src="./image/carousel/AvrilLavigne.jpg" />
                        <p className="legend">Avril Lavigne</p>
                    </div>
            </Carousel>	
	
    )
  }
}


export default CarouselCom
