import React, { Component, setState } from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-link"><a className="footer-link-a" href="http://google.com">IMPRESSUM</a></div>
                <div className="footer-link"><a className="footer-link-b" href="http://google.com">DATENSCHUTZ</a></div>
            </div>
        );
    }
    
}
export default Footer;