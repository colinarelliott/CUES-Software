import Head from 'next/head';
import Nav from './Nav';

const Layout = (props) => (
    <div>
        <Head>
            <title>CUES Software v1.0</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css"></link>
        </Head>
        <Nav />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;