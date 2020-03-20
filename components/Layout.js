import Head from 'next/head';
import Nav from './Nav';
import Sidebar from './Sidebar';
//import AppBar from '@material-ui/core/AppBar' ... https://material-ui.com/getting-started/usage/

const Layout = (props) => (
    <div>
        <Head>
            <title>CUES Software v1.0</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <div>
            <div>
                <div>
                    <Nav />
                    
                </div>
            </div>
            <div>
                <div>
                    {props.children}
                </div>
                <div>
                    <Sidebar name="Properties">
                        <p>This is where properties will go</p>
                    </Sidebar>
                </div>
            </div>
        </div>

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

            * {
                font-family: 'Roboto', sans-serif;
            }
        `}</style>

    </div>
);

export default Layout;
