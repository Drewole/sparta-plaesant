import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

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
    console.log(process.env.API_URL, "API URL")
    return (
        <>
            <h3>Sign up for our Newsletter</h3>
            <Formik
                initialValues={{
                    email: ''
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
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
                                    placeholder=" "
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
