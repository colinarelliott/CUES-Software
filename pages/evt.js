import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const Events = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <h1>Big list of events?</h1>
                    </Paper>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="add" className="fa-button">
                <AddIcon />
            </Fab>
        </AppContainer>
    </Layout>
);

export default Events;