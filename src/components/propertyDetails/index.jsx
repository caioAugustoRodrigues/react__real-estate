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
        <div>
            <div className="columns">
                <div className="columnn col-9 col-xs-12">
                    <h2>{title}</h2>
                    <h3 className="text-dark text-small mb-1">
                        {description}
                    </h3>
                </div>
                <div className="column col-3 col-xs-12">
                    <h5 className="priceClasses">
                        <small>Price from</small>
                        <br />
                        &pound;
                        {price}
                    </h5>
                </div>
            </div>
            <div className="columns">
                <div className="column col-6 col-xs-12">
                    <Carousel id={id} title={title} />
                </div>
                <div className="column col-6 col-xs-12">
                    <KeyFeatures features={features} />
                </div>
            </div>
            <div>
                <p className="text-bold mt-3">Map</p>
                <Map address={address} />
            </div>
            <p className="text-bold mt-3">Full Details</p>
            {details.map(detail => (
                <p key={detail}>
                    {detail}
                </p>
            ))}
        </div>
    )
}

export default PropertyDetails