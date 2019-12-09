import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

class ContactForm extends Component {
    state = { 
        name: '',
        email: '',
        subject: '',
        message: '',
     }

    handleSubmit(e) {
        e.preventDefault()

        const { name, email, subject, message } = this.state

        let templateParams = {
            from_name: email,
            to_name: '<Caio Augusto>',
            subject: subject,
            message_html: message
        }

        emailjs.send(
            'gmail',
            'template_LBG3NBaH',
            templateParams,
            'user_QALoX4Av38kAF6qgBcZYA'
        )

        this.resetform()
    }

    resetform() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() { 
        return ( 
            <div className="contact">
                <h1 className="contact__heading">Please note: All fields are Required.</h1>
                <form className="contact__form" onSubmit={this.handleSubmit.bind(this)}>
                    <formgroup controlId="formBasicEmail">
                        <label className="contact__form__label">Email Adress</label>
                        <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        className="form-control"
                        onChange={this.handleChange.bind(this, 'email')}
                        placeholder="a_1@b.com"
                        required
                    />
                    </formgroup>

                    <formgroup controlId="formBasicName">
                        <label className="contact__form__label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="form-control"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Name"
                            required
                        />
                    </formgroup>

                    <formgroup controlId="formBasicSubject">
                        <label className="contact__form__label">Subject</label>
                        <input
                            type="text"
                            name="Subject"
                            value={this.state.subject}
                            className="form-control"
                            onChange={this.handleChange.bind(this, 'subject')}
                            placeholder="Subject"
                        />
                    </formgroup>

                    <formgroup controlId="formBasicMessage">
                        <label className="contact__form__label">Message</label>
                        <textarea
                            type="text"
                            name="Message"
                            value={this.state.message}
                            className="form-control"
                            onChange={this.handleChange.bind(this, 'message')}
                            placeholder="Message"
                            required
                        />
                    </formgroup>

                    <button className="btn btn__submit mx-auto d-flex" variant="primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
         )
    }
}
 
export default ContactForm;