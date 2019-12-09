import * as React from 'react'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import Banner from '../../components/banner'

function About() {
    return (
        <React.Fragment>
            <NavBar />
            <Banner />
            <div className="container about">
                <div className="content">
                    <h1>Our Motto</h1>
                    <p>"Premium properties for a premium price"
                    </p>
                    <h1>Who we are</h1>
                    <p>
                        A project based on Jon Preece's "React - Real Estate" tutorial, with some modifications with the intent of testing some React functions.
                    </p>
                    
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About