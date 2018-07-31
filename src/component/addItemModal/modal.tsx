import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles'

import styles from './style'
import { Dialog, TextField, Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

interface IAMprops extends WithStyles<typeof styles>{
    open : boolean,
    close : any
}

// interface IAMstate{
    
// }

class AddModal extends React.Component<IAMprops, {}>{
    public render(){
        return(
            <Dialog 
            open={this.props.open}
            onClose={this.props.close}>
                <DialogTitle id="form-dialog-title">일정 추가</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        추가할 일정의 내용을 입력해주세요.
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="제목"
                    type="title"
                    fullWidth
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="설명"
                    type="description"
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close} color="primary">
                    취소
                    </Button>
                    <Button onClick={this.props.close} color="primary">
                    추가
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AddModal);