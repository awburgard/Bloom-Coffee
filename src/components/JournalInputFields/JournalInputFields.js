import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


class JournalInputFields extends Component {
    state = {
        description: '',
        coffee_name: '',
        coffee_shop_id: '',
        overall: '',
        aroma: '',
        flavor: '',
        aftertaste: '',
        acidity: '',
        sweetness: '',
        mouthfeel: '',
        balance: '',
        clean_cup: '',
        uniformity: '',
    }

    componentDidMount() {
        this.setState({
            ...this.props.initialData,
        })
    }


    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    addEntry = (event) => {
        let selectedShop = this.state.coffee_shop_id
        if (selectedShop === '') {
            selectedShop = this.props.reduxState.getCoffeeShops[0].coffee_shop_id;
        }

        this.props.dispatch({
            type: 'ADD_ENTRY',
            payload: {
                description: this.state.description,
                coffee_name: this.state.coffee_name,
                coffee_shop_id: selectedShop,
                overall: this.state.overall,
                aroma: this.state.aroma,
                flavor: this.state.flavor,
                aftertaste: this.state.aftertaste,
                acidity: this.state.acidity,
                sweetness: this.state.acidity,
                mouthfeel: this.state.mouthfeel,
                balance: this.state.balance,
                clean_cup: this.state.clean_cup,
                uniformity: this.state.uniformity,
            }
        })
        this.props.history.push('/tasting-journal-main')
    };


    updateEntry = (event) => {
        let selectedShop = this.state.coffee_shop_id
        if (selectedShop === '') {
            selectedShop = this.props.reduxState.getCoffeeShops[0].coffee_shop_id;
        }

        this.props.dispatch({
            type: 'EDIT_ENTRY',
            payload: {
                tasting_journal_id: this.props.reduxState.setTastingJournalEntry.tasting_journal_id,
                description: this.state.description,
                coffee_name: this.state.coffee_name,
                coffee_shop_id: selectedShop,
                overall: this.state.overall,
                aroma: this.state.aroma,
                flavor: this.state.flavor,
                aftertaste: this.state.aftertaste,
                acidity: this.state.acidity,
                sweetness: this.state.acidity,
                mouthfeel: this.state.mouthfeel,
                balance: this.state.balance,
                clean_cup: this.state.clean_cup,
                uniformity: this.state.uniformity,
            }
        })
        this.props.history.push('/tasting-journal-main')
    }

    render() {
        let conditionalButton = <Button onClick={this.addEntry}>Add Entry</Button>
        if (this.props.editing === true) {
            conditionalButton = <Button onClick={this.updateEntry}>Update Entry</Button>
        }

        const shopOptions = this.props.reduxState.setCoffeeShops.map((shop, index) => {
            return (
                <MenuItem value={shop.coffee_shop_id} key={index}>{shop.shop_name}</MenuItem>
            )
        })
        return (
            <FormControl>
                <TextField
                    id="standard-name"
                    name="message"
                    rows="10"
                    cols="30"
                    value={this.state.description}
                    onChange={this.handleInputChangeFor('description')}>
                </TextField>
                <FormControl>
                    <InputLabel>Coffee Shop Name</InputLabel>
                    <Select
                        type="text"
                        value={this.state.coffee_shop_id}
                        placeholder="coffee shop name"
                        onChange={this.handleInputChangeFor('coffee_shop_id')}>
                        {shopOptions}
                    </Select>
                </FormControl>
                <Input
                    type="text"
                    placeholder="coffee name"
                    value={this.state.coffee_name}
                    onChange={this.handleInputChangeFor('coffee_name')} />
                <Input
                    type="number"
                    placeholder="overall"
                    value={this.state.overall}
                    onChange={this.handleInputChangeFor('overall')} />
                <Input
                    type="number"
                    placeholder="aroma"
                    value={this.state.aroma}
                    onChange={this.handleInputChangeFor('aroma')} />
                <Input
                    type="number"
                    placeholder="flavor"
                    value={this.state.flavor}
                    onChange={this.handleInputChangeFor('flavor')} />
                <Input
                    type="number"
                    placeholder="aftertaste"
                    value={this.state.aftertaste}
                    onChange={this.handleInputChangeFor('aftertaste')} />
                <Input
                    type="number"
                    placeholder="acidity"
                    value={this.state.acidity}
                    onChange={this.handleInputChangeFor('acidity')} />
                <Input
                    type="number"
                    placeholder="sweetness"
                    value={this.state.sweetness}
                    onChange={this.handleInputChangeFor('sweetness')} />
                <Input
                    type="number"
                    placeholder="mouthfeel"
                    value={this.state.mouthfeel}
                    onChange={this.handleInputChangeFor('mouthfeel')} />
                <Input
                    type="number"
                    placeholder="balance"
                    value={this.state.balance}
                    onChange={this.handleInputChangeFor('balance')} />
                <Input
                    type="number"
                    placeholder="clean cup"
                    value={this.state.clean_cup}
                    onChange={this.handleInputChangeFor('clean_cup')} />
                <Input
                    type="number"
                    placeholder="uniformity"
                    value={this.state.uniformity}
                    onChange={this.handleInputChangeFor('uniformity')} />
                {conditionalButton}
            </FormControl>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalInputFields));
