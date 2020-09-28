import React from 'react'
import Mailto from 'react-protected-mailto'

const Button = () => (
    <button className="email-button">
        <Mailto
            className="email-button-text"
            obfuscate={true}
            email={'hello@redareapp.com'}
            headers={
                {subject: 'Question from the website'}
            }/>
    </button>
)

export default Button;