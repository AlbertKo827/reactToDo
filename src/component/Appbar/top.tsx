import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const Topbar : React.SFC<{}> = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="title" color="inherit">
                    Todo-List
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Topbar;