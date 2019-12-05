import * as React from 'react';

function Carousel({id}) {
    return (
        <div id={`carouselControl${id}`} className="carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={`/server/homes/${id}/front.jpg`} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={`/server/homes/${id}/livingroom.jpg`} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={`/server/homes/${id}/kitchen.jpg`} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={`/server/homes/${id}/bedroom.jpg`} alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={`/server/homes/${id}/bathroom.jpg`} alt="Fifth slide" />
                </div>
            </div>

            <a className="carousel-control-prev" href={`#carouselControl${id}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href={`#carouselControl${id}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;