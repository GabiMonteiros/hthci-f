//rfce
import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] = useState(false);
    const [ dropdown, setDropdown] = useState(false);
    
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    // const onMouseEnter = () => {
    //     //originalmente <960
    //     if(window.innerWidth <10) { 
    //         setDropdown(false);
    //     } else{
    //         setDropdown(true);
    //     }
    // };
    const onMouseEnter = () => {
        if (window.innerWidth < 10) {
            setDropdown(false);
          } else {
            setDropdown(true);
          }
        };
      
    

    //     const onMouseLeave = () => {
    //         //originalmente <960
    //        if(window.innerWidth <10) {
    //            setDropdown(false);
    //        } else{
    //            setDropdown(false);
    //        }
    //    };
   
    const onMouseLeave = () => {
        if (window.innerWidth < 10) {
            setDropdown(false);
          } else {
            setDropdown(false);
          }
        };

  return (
      <>
            <nav className="navbar">

                <div className="navbar-container">
                    
                     <Link
                        
                        to="/"
                        className="navbar-logo" 
                        onClick={closeMobileMenu}
                    >
                        {/* HTHCI */}
                        <img src="images/logoHthci.png"  
                            alt="" />
                        
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
                      <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                          <div
                              
                              className="nav-links"
                              onClick={closeMobileMenu}
                          >
                              PROJECTS <i className='fas fa-caret-down'/>
                          </div>
                          {dropdown && <Dropdown />}
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
