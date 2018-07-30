import * as React from 'react';

import { WithStyles } from '@material-ui/core/styles'

import { styles } from './style'
import { Paper, Table, withStyles, TableBody, TableRow, TableCell, Checkbox, TableHead, Grid, Toolbar ,Tooltip, IconButton, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

let count : number = 0;

const createData  = (title : string, description : string) => {
    count += 1;

    return {id : count, title, description};
}

interface ITDTableProps extends WithStyles<typeof styles>{
    
}

interface ITDTableState{
    selected : Array<{

    }>,
    data : Array<{
        id : number,
        title : string,
        description : string
    }>,
    numSelected : number
}

class TDTable extends React.Component<ITDTableProps, ITDTableState>{
    constructor(props : ITDTableProps){
        super(props);

        this.state = {
            selected : [

            ],
            data : [
                createData('first', 'this is first item'),
                createData('second', 'this is second item'),
                createData('third', 'this is third item')
            ],
            numSelected : -1
        }
    }

    public isSelected = (id : number) => this.state.selected.indexOf(id) !== -1;

    public handleClick = (event : any, id : number) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected : any = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        this.setState({ selected: newSelected });

        console.log(this.state.selected);
    };

    public render() {
        return (
            <Grid  className={this.props.classes.root} spacing={40}>
                <Grid container={true} justify="center" alignItems="center">
                    <Paper className={this.props.classes.paper}>
                        <Table>
                            <TableHead>
                                <TableRow role="checkbox">
                                    <TableCell padding="checkbox" className={this.props.classes.checkbox}>
                                        <Checkbox/>
                                    </TableCell>
                                    <TableCell>
                                        목록
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data
                                        .map(n => 
                                            <TableRow 
                                            key={n.id} 
                                            hover={true} 
                                            onClick={(event) => {this.handleClick(event, n.id)}}
                                            role="checkbox"
                                            selected={this.isSelected(n.id)}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox checked={this.isSelected(n.id)}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <h4>{n.title}</h4>
                                                        <p>{n.description}</p>
                                                    </TableCell>
                                            </TableRow>  
                                    )
                                }
                            </TableBody>
                            
                        </Table>
                        <Toolbar>
                            <div className={this.props.classes.selecLabel}>
                                {this.state.numSelected > 0 && (
                                <Typography color="inherit" variant="subheading">
                                    {this.state.numSelected} selected
                                </Typography>
                                )}
                            </div>
                            <div className={this.props.classes.spacer} />
                            <div className={this.props.classes.actions}>
                                <Tooltip title="Add">
                                    <IconButton aria-label="Add">
                                    <AddIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className={this.props.classes.actions}>
                                <Tooltip title="Delete">
                                    <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Toolbar>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TDTable);