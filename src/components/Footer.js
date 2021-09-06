import React from 'react'
import NewsletterSignup from './NewsletterSignup'

const Footer = () => {
    return (
        <footer>
            <div className="newsletter">
                <NewsletterSignup />
            </div>
            <p className="creds">&copy; 2021 &mdash; Sparta Plaesant - <a href="#">Instagram</a> - <a href="#">Facebook</a> - <a href="#">Twitter</a></p>
        </footer>
    )
}

export default Footer
