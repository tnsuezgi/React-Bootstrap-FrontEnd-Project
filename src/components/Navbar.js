import React from 'react';
import Icons from '../assets/icons';

const Navbar = () => {
    return (
        /*<body id="page-body">*/
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbarSpec" id="mainNavbar">
                <div className="container">
                    <a className="navbar-brand navbarLogo" title="logo" href="/">Collers</a>
                    <button type="button" className="navbar-toggler interface-gen-color menu-open-icon" data-bs-toggle="offcanvas"
                            data-bs-target="#menuContent"
                            aria-controls="menuContent" aria-label="menüyü açma kapama butonu" aria-expanded="false">
                        {/*<span className="navbar-toggler-icon" style={{ color: '#ff5733' }}></span>*/}
                        {/*<TbMenuDeep />*/}
                        <img src={Icons.menuScale} alt={"Menu Ican"}/>
                    </button>
                    <div className="offcanvas offcanvas-end menu-card" tabIndex="-1" id="menuContent" aria-labelledby="menuHeader">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title interface-gen-color" id="menuHeader">İçerik</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Kapat">
                            </button>
                        </div>
                        <div className="offcanvas-body d-flex flex-row justify-content-center justify-content-md-end">
                            <ul className="navbar-nav py-lg-2">
                                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                <li className="nav-item"><a href="#" className="nav-link">Products</a></li>
                                <li className="nav-item"><a href="#"  className="nav-link">Solutions</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Resources</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Log In</a></li>
                                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                            </ul>
                            <button className="btn
                                    btn-outline-custom
                                    btn-border-color-brown
                                    font-size-16 d-none d-md-inline-block
                                    ms-3">Sign up now</button>
                        </div>
                    </div>
                </div>
            </nav>
        /*</body>*/
    );
};

export default Navbar;