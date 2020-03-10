import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';

const reactIcon = <FontAwesomeIcon icon={faReact} />;   


export default function Footer() {
    const footerReact = {
        textAlign: 'center',
        gridRow: '8',
        gridColumn: '1/4'
    }
    return (
        <footer style={footerReact}>
                <p>Copyright © 2020 by Will Quanstrom under the MIT license powered by {reactIcon}</p>
        </footer>
    )
}
