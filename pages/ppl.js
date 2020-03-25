import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import MUIDataTable from 'mui-datatables'

const columns = ["Name", "Email", "Phone", "Role"]

const data = [
    ["Colin Elliott", "colin.elliott@carleton.ca", "613-555-5555", "Event Technician"],
    ["John Rosefield", "john.rosefield@carleton.ca", "613-555-5555", "Audio Specialist"],
    ["Kate Macdonnell", "katemacdonnell3@cunet.carleton.ca", "613-555-5555", "Supervisor"],
    ["Larry Munn", "colin.elliott@carleton.ca", "613-555-5555", "Event Technician"],
    ["Alex Pilkington", "colin.elliott@carleton.ca", "613-555-5555", "Production Coordinator"],
];

const options = {
    filterType: 'checkbox',
    elevation: '0'
};

const People = () => (
    <Layout>
        <AppContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <ButtonGroup color="primary" aria-label="outlined primary button group" className="button-group">
                            <Button>Staff</Button>
                            <Button>Clients</Button>
                            <Button>Contacts</Button>
                        </ButtonGroup>
                        <MUIDataTable
                            title={"Staff"}
                            data={data}
                            columns={columns}
                            options={options}
                            />
                    </Paper>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="add" className="fa-button">
                <AddIcon />
            </Fab>
        </AppContainer>
    </Layout>
);

export default People;