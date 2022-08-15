//rfce
import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


function Navbar() {
    const [click, setClick] = useState(false)
    
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    

  return (
      <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link
                      to="/"
                      className="navbar-logo" 
                      onClick={closeMobileMenu}
                  >
                      HTHCI
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      {/* burger menu */}
                      <i className={click ? "fas fa-times" : "fas fa-bars"} />
                  </div>

                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                      {/* qnd clica desaparece o menu */}

                     

                      <li className="nav-item">
                          <button id="donateBtn">
                              <Link
                                  to="/get-involved"
                                  className="donateBtnC"
                                  onClick={closeMobileMenu}
                              >
                                  DONATE
                              </Link>
                          </button>
                      </li>
                      <li className="nav-item">
                          <Link
                              to="/"
                              className="nav-links-mobile"
                              onClick={closeMobileMenu}
                          >
                              HOME
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              to="/about"
                              className="nav-links"
                              onClick={closeMobileMenu}
                          >
                              ABOUT US
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              to="/projects"
                              className="nav-links"
                              onClick={closeMobileMenu}
                          >
                              PROJECTS
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              to="/contact"
                              className="nav-links"
                              onClick={closeMobileMenu}
                          >
                              CONTACT
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              to="/team"
                              className="nav-links"
                              onClick={closeMobileMenu}
                          >
                              MEET THE TEAM
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              to="/get-involved"
                              className="nav-links"
                              onClick={closeMobileMenu}
                          >
                              GET INVOLVED
                          </Link>
                      </li>
                  </ul>
                  
              </div>
          </nav>
      </>
  );
}

export default Navbar
