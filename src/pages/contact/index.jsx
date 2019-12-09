import * as React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact'

function ContactUs() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container contact-container shado-sm">
                <div className="row">
                    <div className="col-md-6">
                        test 2
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