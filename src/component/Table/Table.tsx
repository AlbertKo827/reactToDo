import * as React from 'react';

import { WithStyles } from '@material-ui/core/styles'

import styles from './style'
import { Paper, Table, withStyles, TableBody, TableRow, TableCell, Checkbox } from '@material-ui/core';

let count : number = 0;

const createData  = (title : string, description : string) => {
    count += 1;

    return {id : count, title, description};
}

interface ITDTableProps extends WithStyles<typeof styles>{
}

interface ITDTableState{
    data : Array<{
        id : number,
        title : string,
        description : string
    }>,
}

class TDTable extends React.Component<ITDTableProps, ITDTableState>{
    constructor(props : ITDTableProps){
        super(props);

        this.state = {
            data : [
                createData('first', 'this is first item')
            ]
        }
    }

    public render() {
        return (
            <Paper>
                <Table>
                    <TableBody>
                        {
                            this.state.data
                                .map(n => 
                                    <TableRow key={n.id}>
                                            <TableCell>
                                                <Checkbox />
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
            </Paper>
        )
    }
}

export default withStyles(styles)(TDTable);