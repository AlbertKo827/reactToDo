import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme : Theme) => createStyles({
    root : {
       margin : theme.spacing.unit * 5
    },
    table : {
        minWidth : 960
    },
    paper : {
        width : 750
    },
    checkbox : {
        width : 0
    },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    selecLabel: {
        flex: '0 0 auto',
    },
});

export default styles;