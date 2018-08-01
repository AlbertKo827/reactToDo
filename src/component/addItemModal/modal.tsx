import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles'

import styles from './style'
import { Dialog, TextField, Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

interface IAMprops extends WithStyles<typeof styles>{
    open : boolean,
    close : any,
    clickedAdd : any
}

interface IAMstate{
    title : string,
    description : string
}

class AddModal extends React.Component<IAMprops, IAMstate>{
    constructor(props : IAMprops){
        super(props);

        this.state = {
            title : "",
            description : ""
        }
    }

    public changeValue = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const objName = event.target.name;

        if(objName === 'title')
            this.setState({title: event.target.value});
        else if(objName === 'description')
            this.setState({description: event.target.value});
    }

public ClickAddHandler = () => {
    this.props.clickedAdd(this.state);
}

    public render(){
        return(
            <Dialog fullWidth
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
                    name="title"
                    label="제목"
                    type="title"
                    fullWidth
                    onChange={event => this.changeValue(event)}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    name="description"
                    label="설명"
                    type="description"
                    fullWidth
                    onChange={event => this.changeValue(event)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close} color="primary">
                    취소
                    </Button>
                    <Button onClick={this.ClickAddHandler} color="primary">
                    추가
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AddModal);