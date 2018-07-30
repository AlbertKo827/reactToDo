import * as React from 'react';

import { WithStyles } from '@material-ui/core/styles'

import styles from './style'
import { Paper, Table, withStyles, TableBody, TableRow, TableCell, Checkbox } from '@material-ui/core';

interface ITDTableProps extends WithStyles<typeof styles>{
}

interface ITDTableState{
    id : number
}

class TDTable extends React.Component<ITDTableProps, ITDTableState>{
    public render() {
        return (
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell>
                                <div>
                                    <p>Title</p>
                                    <p>body</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(TDTable);