import Head from 'next/head';
import Nav from './Nav';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { spacing } from '@material-ui/system'

//Link to Material-UI: https://material-ui.com/getting-started/installation/

const theme = createMuiTheme({
    spacing: 5,

    palette: {
      primary: {
        main: '#DD0000',
      },
      secondary: {
        main: '#FFF',
      },
      background: {
        main: '#CCC',
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
                <Nav/>            
            </div>
            <div className="app-content">
                {props.children}
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
            }

            * {
                font-family: 'Roboto', sans-serif;
            }

            .app-content {
                background-color: #EEE;
            }
        `}</style>

    </div>
    </ThemeProvider>
);

export default Layout;
