import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

import {
    IconContext,
    FaFacebookSquare,
    FaLinkedin,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/fa"


const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

return (
        <footer className={footerStyles.footer}>
            <nav>
                <ul className={footerStyles.navList}>
                    <li>
                        <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="https://twitter.com/@herman_adu" target="_blank"> 
                            <div>
                                <FaLinkedin />      
                            </div>            
                        </Link>
                    </li>
                    <li>
                        <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="https://twitter.com/@herman_adu" target="_blank">
                            <div>
                                <FaFacebookSquare />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="https://twitter.com/@herman_adu" target="_blank">
                            <div>
                                <FaInstagramSquare />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="https://twitter.com/@herman_adu" target="_blank">
                            <div>
                                <FaTwitterSquare />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <h4>
                Created by {data.site.siteMetadata.author} - copyright&copy;{new Date().getFullYear()} <span> AduDev </span> - Powered by Gatsby
            </h4>
        </footer>
    )
}

export default Footer;