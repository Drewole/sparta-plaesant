import React from 'react'
import NewsletterSignup from './NewsletterSignup'

const Footer = () => {
    return (
        <footer>
            <div className="newsletter">
                <NewsletterSignup />
            </div>
            <div className="credits">
                <p className="creds">&copy; 2021 &mdash; Sparta Plaesant</p>
                <p className="creds"><a href="/#">Instagram</a> - <a href="/#">Facebook</a> - <a href="/#">Twitter</a></p>
            </div>

        </footer>
    )
}

export default Footer
