import * as React from 'react'
import KeyFeatures from './keyfeatures'
import Map from './map'
import Carousel from '../gallery'

function PropertyDetails({ listing }) {
    if (!listing) {
        return null
    }

    const { title, address, description, price, features, details, id } = listing

    return (
        <div className="details row">
             <div className="details__title col-md-12">
                <h2>{title}</h2>
                <h5>
                    <small>Price from:</small>
                    <span className="price">
                    &pound;
                    {price}
                    </span>
                </h5>
                <h3>
                    {description}
                </h3>
            </div>
            
            <div className="details__gallery col-md-12">
                <Carousel id={id} />
            </div>

            <div className="details__features row">
                <div className="details__features__features col-md-6">
                    <KeyFeatures features={features} />
                </div>
                <div className="details__features__map col-md-6">
                <p className="details__features__map__title">Map</p>
                    <Map address={address} />
                </div>
            </div>

            <div className="details__details">
                <p className="details__details__title">
                    Full Details
                </p>
                {details.map(detail => (
                    <p className="details__details__content" key={detail}>
                        {detail}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default PropertyDetails