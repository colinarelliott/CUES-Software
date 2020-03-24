import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const Inventory = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Paper elevation={3}><h1>This will be a list of inventory items maybe using https://github.com/mbrn/material-table or https://github.com/gregnb/mui-datatables</h1></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3}><h1>Options and filters will be over here</h1></Paper>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="add" className="fa-button">
                <AddIcon />
            </Fab>
        </AppContainer>
    </Layout>
);

export default Inventory;