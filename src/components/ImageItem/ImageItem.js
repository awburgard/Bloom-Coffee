import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, ButtonBase, Typography, Button } from '@material-ui/core/';


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

class ImageItem extends Component {
    state = {
        show: false,
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
            <div className={this.props.classes.root}>
                <ButtonBase
                    focusRipple
                    key={this.props.shop.shop_name}
                    className={this.props.classes.image}
                    focusVisibleClassName={this.props.classes.focusVisible}
                    onClick={this.handleDialog}
                    style={{
                        width: `100%`,
                    }}
                >
                    <span className={this.props.classes.imageSrc}
                        style={{
                            backgroundImage: `url(${this.props.shop.shop_logo})`
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
                            {this.props.shop.shop_name}
                            <span className={this.props.classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
                <Dialog open={this.state.show} onClose={this.handleClose}>
                    <DialogTitle>Address</DialogTitle>
                    <DialogContent>
                        <Button>
                            <a href={this.props.shop.shop_address} target="_blank">Visit</a>
                        </Button>
                        <Button>
                            <a href={this.props.shop.shop_link} target="_blank">Website</a>
                        </Button>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(withStyles(styles)(ImageItem));
