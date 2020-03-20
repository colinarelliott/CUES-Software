import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InvIcon from '@material-ui/icons/ListAlt'
import HomeIcon from '@material-ui/icons/Home'

const Nav = () => (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Link href="/">
                    <IconButton aria-label="inventory" color="secondary">
                        <HomeIcon/>
                    </IconButton>
                </Link>
                <Typography variant="h5">CUES</Typography>
                <Link href="/inv">
                    <IconButton aria-label="inventory" color="secondary">
                        <InvIcon/>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
);

export default Nav;