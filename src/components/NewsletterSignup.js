import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { postData } from '../utils/api'

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const NewsletterSignup = () => {

    return (
        <>
            <h3>Sign up for our Newsletter</h3>
            <Formik
                initialValues={{
                    email: ''
                }}
                onSubmit={async (values) => {
                    const success = postData(values)
                    await new Promise((r) => setTimeout(r, 500));
                    if (success) {
                        alert("Successfully subscribed")
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <>
                        <Form>
                            <label htmlFor="email">
                                <Field
                                    id="email"
                                    validate={validateEmail}
                                    name="email"
                                    placeholder="&nbsp;"
                                    type="email"
                                />
                                <span>Email</span>
                            </label>

                            <button type="submit">Submit</button>
                        </Form>
                        <p><ErrorMessage name="firstName" /></p>
                    </>
                )}
            </Formik>
        </>
    )
}

export default NewsletterSignup
