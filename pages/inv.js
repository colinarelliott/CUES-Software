import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import MUIDataTable from 'mui-datatables'

const columns = ["ID", "Name", "Status", "Condition", "Family"]

const data = [
    ["001", "QSC TouchMix 01", "Available", "Working", "NA"],
    ["002", "QSC TouchMix 02", "Unavailable", "Working", "NA"],
    ["003", "QSC TouchMix 03", "Available", "Working", "NA"],
    ["004", "QSC TouchMix 04", "Available", "Missing SSD", "NA"],
    ["005", "Laptop #1", "Available", "Working", "Laptop Kit #1"],
];

const options = {
    filterType: 'checkbox'
};

const Inventory = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Paper elevation={3}>
                        <MUIDataTable 
                            title={"Inventory Items"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3}><h1>Add item dialogue?</h1></Paper>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="add" className="fa-button">
                <AddIcon />
            </Fab>
        </AppContainer>
    </Layout>
);

export default Inventory;