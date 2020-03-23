import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Inventory = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper><h1>Inventory</h1></Paper>
                </Grid>
            </Grid>
        </AppContainer>
    </Layout>
);

export default Inventory;