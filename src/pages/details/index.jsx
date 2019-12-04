import * as React from 'react'
import {
    PropertyListingsProvider,
    PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'
import PropertyDetails from '../../components/propertyDetails'
import NavBar from '../../components/navbar'
import "../../css/main.css"

function Details ({ propertyId }){

    return (
        <React.Fragment>
            <NavBar />
            <div className="container">
                <PropertyListingsProvider>
                    <PropertyListingsConsumer>
                        {({ getListingByPropertyId }) => (
                            <PropertyDetails listing={getListingByPropertyId(propertyId)} />
                        )}
                    </PropertyListingsConsumer>
                </PropertyListingsProvider>
            </div>
        </React.Fragment>
    )
}

export default Details;