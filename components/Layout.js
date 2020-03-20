import Head from 'next/head';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//Link to Material-UI: https://material-ui.com/getting-started/installation/

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FF0000',
      },
      secondary: {
        main: '#FFFFFF',
      },
      background: {
        main: '#CCCCCC',
      },
    },
  })

const Layout = (props) => (
    <ThemeProvider theme={theme}>
    <div>
        <Head>
            <title>CUES Software v1.0</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
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
    </ThemeProvider>
);

export default Layout;
