import React from 'react'
import { Formik, Field, Form } from 'formik';

const NewsletterSignup = () => {
    return (
        <div>
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
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    <button type="submit">Submit</button>
                </Form>
                {/*  )} */}
            </Formik>
        </div>
    )
}

export default NewsletterSignup
