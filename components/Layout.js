import Head from 'next/head';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = (props) => (
    <div>
        <Head>
            <title>CUES Software v1.0</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css"></link>
        </Head>
        <body>
        <div className="container-fluid">
            <Nav />
            <div className="row">
                <div className="col-9">
                    {props.children}
                </div>
                <div className="col-3">
                    <Sidebar/>
                </div>
            </div>
        </div>
        </body>

        <style jsx>{`
            .container-fluid {
                margin: 0px;
                padding: 0px;
                height: 100%;
            }
        `}</style>

        <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
                height: 100%;
            }
        `}</style>

    </div>
);

export default Layout;