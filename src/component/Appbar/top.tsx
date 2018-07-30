import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './style';

interface Iprops extends WithStyles<typeof styles>{
}

const Topbar : React.SFC<Iprops> = (props) => {
    return (
        <Grid container={true}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        To Do List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default withStyles(styles)(Topbar);