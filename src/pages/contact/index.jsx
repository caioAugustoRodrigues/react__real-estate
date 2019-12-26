import * as React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact'
import Banner from '../../components/banner'

function ContactUs() {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <div className="container contact-container shadow-sm">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Let's Start a Conversation!</h1>

                        <h3>How can we help you?</h3>
                        <p>Want to know more about our properties?</p>

                        <h3>Technical Help</h3>
                        <p>Found a bug on our platform? Any suggestions?</p>

                        <h3>Hire us</h3>
                        <p className="last-paragraph">Liked our design, functionalities or just the overall feel of the page?</p>

                        <p>If the answer to any of these questions is yes, or you just wanna chat a little, then Contact Us using the form below!</p>
                    </div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default ContactUs;