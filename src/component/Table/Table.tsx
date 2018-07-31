import * as React from 'react';

import AddModal from '../addItemModal/modal'

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
    selected : number[],
    data : Array<{
        id : number,
        title : string,
        description : string
    }>,
    numSelected : number,
    isOpend : boolean
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
            numSelected : -1,
            isOpend : false
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

public handleDeleteClick = (event : any, id : number[]) => { // 다음 해야함
    let newdata : Array<{
        id : number,
        title : string,
        description : string
    }> = [];

    newdata = this.state.data.filter(((x, i, a) => {
        for(let i = 0; i < id.length ; i++){
            if(x.id === id[i])
                return false;
        }
        return true;
    }));

    this.setState({
        data : newdata
    });
}

public handleAddClick = (event : any) => {
    this.setState({isOpend : true});
}

public handleClose = () => {
    this.setState({ isOpend : false });
  };

public handleDialogAdd = (value : {title : string, description : string}) => {
    const newdata : Array<{
        id : number,
        title : string,
        description : string
    }> = this.state.data;

    newdata.push(createData(value.title, value.description));

    this.setState({
        isOpend : false, 
        data : newdata
    });

    console.log();
}

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
                                    <AddIcon onClick={(event) => this.handleAddClick(event)}/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className={this.props.classes.actions}>
                                <Tooltip title="Delete">
                                    <IconButton aria-label="Delete" onClick={(event) => this.handleDeleteClick(event, this.state.selected)}>
                                    <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Toolbar>
                    </Paper>
                </Grid>
                <AddModal  open={this.state.isOpend} close={this.handleClose} clickedAdd={this.handleDialogAdd}/>
            </Grid>
        )
    }
}

export default withStyles(styles)(TDTable);