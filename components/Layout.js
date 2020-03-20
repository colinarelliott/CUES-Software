import Head from 'next/head';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = (props) => (
    <div>
        <Head>
            <title>CUES Software v1.0</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css"></link>
        </Head>
        <div className="container-fluid">
            <div className="row" id="nav">
                <div className="col-12">
                    <Nav />
                </div>
            </div>
            <div className="row" id="content">
                <div className="col-9">
                    {props.children}
                </div>
                <div className="col-3">
                    <Sidebar name="Properties">
                        <p>This is where properties will go</p>
                    </Sidebar>
                </div>
            </div>
        </div>

        <style jsx>{`
            .container-fluid {
                margin: 0px;
                padding: 0px;
                height: 100%;
            }

            #nav {
                height: 7vh;
                padding: 0px;
                margin: 0px;
            }

            #content {
                height: 93vh;
                padding: 0px;
                margin: 0px;
            }

            .col-3, .col-9, .col-12 {
                padding: 0px;
                margin: 0px;
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
                padding: 0px;
                margin: 0px;
            }
        `}</style>

    </div>
);

export default Layout;