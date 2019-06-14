import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, ButtonBase, Typography, Button, Grid } from '@material-ui/core/';


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
        show: false,
    }

    editEntry = (event) => {
        this.props.dispatch({
            type: `GET_ENTRY`,
            payload: this.props.entry.tasting_journal_id,
        })
        this.props.history.push(`/tasting-journal-edit-form/?entry=${this.props.entry.tasting_journal_id}`)
    }

    deleteEntry = (event) => {
        this.props.dispatch({
            type: 'DELETE_ENTRY',
            payload: this.props.entry.tasting_journal_id
        })
    }

    handleDialog = () => {
        this.setState({
            show: true,
        })
    }

    handleClose = () => {
        this.setState({
            show: false,
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
                <Dialog open={this.state.show} onClose={this.handleClose}>
                    <DialogTitle>Entry</DialogTitle>
                    <Grid container alignItems="center">
                        <DialogContent>
                            <Grid item xs={4}>
                                <Typography>{this.props.coffeeShopName}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Overall: {this.props.entry.overall}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Aroma: {this.props.entry.aroma}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Aftertaste: {this.props.entry.aftertaste}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Acidity: {this.props.entry.acidity}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Sweetness: {this.props.entry.sweetness}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Mouthfeel: {this.props.entry.mouthfeel}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Balance: {this.props.entry.balance}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Clean Cup: {this.props.entry.clean_cup}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Uniformity: {this.props.entry.uniformity}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography>Description: {this.props.entry.description}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <Button onClick={this.deleteEntry} color="primary"><DeleteIcon /></Button>
                            <Button onClick={this.editEntry}>Edit</Button>
                            </Grid>
                        </DialogContent>
                    </Grid>
                </Dialog>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)((withStyles(styles)(JournalItem))));
