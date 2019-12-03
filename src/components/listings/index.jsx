import * as React from 'react'
import { Link } from '@reach/router'
import Carousel from '../gallery'

function Listing ({ listing }) {
    if (!listing) {
        return null
    }

    const { id, title, address, price } = listing

    return (
            <div className="col-lg-6 property-wrap">
                <div className="card">
                    <Carousel id={id}/>
                    <div className="card__header">
                        <div className="card__header__title--1">{title}</div>
                        <div className="card__header__title--2">&pound; {price}</div>
                        <div className="card__header__title--sub">{address}</div>
                    </div>
                    <div className="card__footer">
                        <Link className="btn btn--goto" to={`/details/${id}`}>
                            Go to Property
                        </Link>
                    </div>        
                </div>
            </div>
            
    )
}

export default Listing