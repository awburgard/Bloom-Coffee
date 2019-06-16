import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ButtonBase, Typography } from '@material-ui/core/';
import EntryInfoDialog from '../EntryInfoDialog/EntryInfoDialog';
import EntryEditDialog from '../EntryEditDialog/EntryEditDialog';
import swal from 'sweetalert';


const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
                backgroundColor: "rgba(0,0,0,0.5)"
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.7,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

class JournalItem extends Component {
    state = {
        showInfo: false,
        showEdit: false,
    }

    editEntry = (event) => {
        this.props.dispatch({
            type: `GET_ENTRY`,
            payload: this.props.entry.tasting_journal_id,
        })
        this.props.history.push(`/tasting-journal-edit-form/?entry=${this.props.entry.tasting_journal_id}`)
        this.handleClose();
    }

    deleteEntry = (event) => {
        swal({
            Title: 'Are you sure?',
            text: 'This will delete your item',
            icon: 'warning',
            buttons: ["Oh no!", "Aww yeah!"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.dispatch({
                        type: 'DELETE_ENTRY',
                        payload: this.props.entry.tasting_journal_id
                    })
                    swal('Poof! Your entry has been remove!', {
                        icon: 'success',
                    });
                } else {
                    swal('Your entry is safe!',{
                        icon: 'info',
                    })
                }
            })
            this.handleClose();
    }

handleDialog = () => {
    this.setState({
        showInfo: true,
    })
}

handleClose = () => {
    this.setState({
        showInfo: false,
    })
}

handleAddToggle = () => {
    this.props.dispatch({
        type: 'ENTRY_EDIT_DIALOG_SHOW'
    })
}

render() {
    return (
        <div>
            <ButtonBase
                focusRipple
                key={this.props.entry.index}
                className={this.props.classes.image}
                focusVisibleClassName={this.props.classes.focusVisible}
                onClick={this.handleDialog}
                style={{
                    width: `100%`,
                }}
            >
                <span className={this.props.classes.imageSrc}
                    style={{
                        backgroundImage: `url(${this.props.entry.shop_logo})`
                    }}
                >

                </span>

                <span className={this.props.classes.imageBackdrop} />
                <span className={this.props.classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={this.props.classes.imageTitle}
                    >
                        {this.props.entry.coffee_name}
                        <span className={this.props.classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
            <EntryInfoDialog editEntry={this.editEntry} deleteEntry={this.deleteEntry} show={this.state.showInfo} entry={this.props.entry} handleClose={this.handleClose} coffeeShopName={this.props.coffeeShopName} />
            <EntryEditDialog show={this.props.reduxState.entryEditDialogShowReducer} entry={this.props.entry} handleAddToggle={this.handleAddToggle} coffeeShopName={this.props.coffeeShopName} />

        </div>
    )
}
}

export default withRouter(connect(mapReduxStateToProps)((withStyles(styles)(JournalItem))));
