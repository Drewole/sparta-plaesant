import React from 'react'
import { Formik, Field, Form } from 'formik';

const NewsletterSignup = () => {
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
                {/* {({ isSubmitting }) => ( */}
                <Form>
                    <label htmlFor="email">
                        <Field
                            id="email"
                            name="email"
                            placeholder=" "
                            type="email"
                        />
                        <span>Email</span></label>
                    <button type="submit">Submit</button>
                </Form>
                {/*  )} */}
            </Formik>
        </>
    )
}

export default NewsletterSignup
