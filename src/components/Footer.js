import React from 'react'
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = (props) => (
  <footer className="footer-cmp">
    <nav className="footer-cmp__nav">
      <ul className="footer-cmp__nav-list">
        <li className="footer-cmp__nav-item">
          <Link to="/" className="footer-cmp__nav-link">All</Link>
        </li>
        <li className="footer-cmp__nav-item">
          <Link to="/active" className="footer-cmp__nav-link">active</Link>
        </li>
        <li className="footer-cmp__nav-item">
          <Link to="/completed" className="footer-cmp__nav-link">Completed</Link>
        </li>
      </ul>
    </nav>
  </footer>
)

export default Footer
