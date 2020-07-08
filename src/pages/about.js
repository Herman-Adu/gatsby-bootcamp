import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return(        
        <Layout>  
            <Head title="About" />         
            <h1>About Me</h1>
            <p>I currently setting up a start-up dev company.</p>
            <p>Need a website or web application or a new mobile application <Link to="/contact">Contact Me!</Link></p>            
        </Layout>
    )
}

export default AboutPage;