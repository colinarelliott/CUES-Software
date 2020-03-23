import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { spacing } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AppContainer(props) {

  const classes = useStyles();

  return (
      <React.Fragment>
        <CssBaseline />
        <div className="contcont">
            <Container maxWidth="fl">
              {props.children}
            </Container>
        </div>
        <style jsx>{`
            .contcont {
              padding-top: 80px;
              height: 100vh;
            }
        `}</style>
      </React.Fragment>
  );
}