import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Home = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={3}><h1>Welcome to the home page, in the future there will be statistics and stuff here but for now, text.</h1></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}><h3>Module</h3></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}><h3>Module</h3></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}><h3>Module</h3></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}><h3>Module</h3></Paper>
                </Grid>
            </Grid>
        </AppContainer>
    </Layout>
);

export default Home;

