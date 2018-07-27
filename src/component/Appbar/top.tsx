import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styles from './style';

interface Iprops extends WithStyles<typeof styles>{
}

const Topbar : React.SFC<Iprops> = (props) => {
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
            <TextField
        defaultValue="react-bootstrap"
        label="Bootstrap"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: props.classes.bootstrapRoot,
            input: props.classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: props.classes.bootstrapFormLabel,
        }}
      />
        </div>
        
    );
}

export default withStyles(styles)(Topbar);