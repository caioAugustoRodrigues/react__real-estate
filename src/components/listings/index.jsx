import * as React from 'react'
import { Link } from '@reach/router'
import Carousel from '../gallery'

function Listing ({ listing }) {
    if (!listing) {
        return null
    }

    const { id, title, address, price } = listing

    return (
        <Link className="col-lg-6 property-wrap" to={`/details/${id}`}>
            <div className="card">
                <Carousel id={id}/>

                <div className="card__header">
                    <div className="card__header__title--1">{title}</div>
                    <div className="card__header__title--2">&pound; {price}</div>
                </div>
                
                <div className="card__footer">
                    <div className="card__footer__sub">
                        {address}
                    </div>
                </div>    
            </div>
        </Link> 
            
    )
}

export default Listing