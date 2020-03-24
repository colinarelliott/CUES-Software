import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Calendar = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <Paper elevation={3}>
                        <h1>Insert Calendar here</h1>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={3}><h1>Options / View switching</h1></Paper>
                </Grid>
            </Grid>
        </AppContainer>
    </Layout>
);

export default Calendar;