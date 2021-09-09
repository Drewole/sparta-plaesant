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
    const [success, setSuccess] = React.useState(false);

    const alertSuccess = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
    }
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
                        alertSuccess();
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <>
                        <div className="alert">
                            {success &&
                                <div className="alert alert-success" role="alert">
                                    <p>Success! Thank you for subscribing to our newsletter!</p>
                                </div>
                            }
                        </div>
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
                        <p><ErrorMessage name="email" /></p>
                    </>
                )}
            </Formik>
        </>
    )
}

export default NewsletterSignup
