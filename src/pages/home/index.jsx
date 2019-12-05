import * as React from 'react'
import Hero from '../../components/hero'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'
import Listing from '../../components/listings'
import Filter from '../../components/filter'
import Footer from '../../components/footer'


function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {function(value) {
              const { propertyListings, allListings, updateFilter } = value
              
              return (
                <React.Fragment>
                  <div className="container listings">
                    <Filter
                      updateFilter ={updateFilter}
                      count={propertyListings.length}
                      postcodes={allListings
                      .map(listing => listing.postcode.split(' ')[0])
                      .filter((item, i, arr) => arr.indexOf(item) ===i)}
                      propType={allListings
                      .map(listing => listing.propertyType.split(' ')[0])
                      .filter((item, i, realType) => realType.indexOf(item) ===i)}
                    />
     
                    <div className="row">
                      {propertyListings.map(listing => (
                        <Listing listing={listing} key={listing.address}/>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              )
            }}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
      <Footer /> 
    </React.Fragment>
  )
}

export default Home