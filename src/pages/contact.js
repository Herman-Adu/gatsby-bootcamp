import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact" />
            <h1>Contact Us</h1>
            <p>
                The best way to reach me is via <a href="https://twitter.com/@herman_adu" target="_blank">@herman_adu</a> on Twitter!
            </p>           
        </Layout>
    )
}

export default ContactPage;