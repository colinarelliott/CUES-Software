import Link from 'next/link'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InvIcon from '@material-ui/icons/ListAlt'
import HomeIcon from '@material-ui/icons/Home'
import CalIcon from '@material-ui/icons/CalendarToday'
import PplIcon from '@material-ui/icons/PeopleAlt'
import EvtIcon from '@material-ui/icons/Assignment'
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar'

const Nav = () => (
    <div>
    <AppBar>
            <Toolbar >
                <Link href="/">
                    <IconButton aria-label="home" color="secondary">
                        <HomeIcon/>
                    </IconButton>
                </Link>
                <Link href="/">
                <Typography variant="h5"><b>CUES</b></Typography>
                </Link>
                <Link href="/inv">
                    <IconButton aria-label="inventory" color="secondary">
                        <InvIcon/>
                    </IconButton>
                </Link>
                <Link href="/cal">
                    <IconButton aria-label="calendar" color="secondary">
                        <CalIcon/>
                    </IconButton>
                </Link>
                <Link href="/ppl">
                    <IconButton aria-label="people" color="secondary">
                        <PplIcon/>
                    </IconButton>
                </Link>
                <Link href="/evt">
                    <IconButton aria-label="events" color="secondary">
                        <EvtIcon/>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
        </div>
);

export default Nav;