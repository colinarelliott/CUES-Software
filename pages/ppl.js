import Layout from "../components/Layout";
import AppContainer from "../components/AppContainer";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

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
                        <h1>Lists of groups, editable, etc.</h1>
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