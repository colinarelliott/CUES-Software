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

            h1, h2, h3, h4, h5, h6, p {
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                margin: 0px;
            }

            .fa-button {
                margin: 30px;
                position: absolute;
                right: 0;
                bottom: 0;
            }

            .button-group {
                margin: 15px;
            }
        `}</style>

        <div>
            <div>
                <Nav/>            
            </div>
            <div className="app-content">
                {props.children}
            </div>
        </div>
        

    </div>
    </ThemeProvider>
);

export default Layout;
