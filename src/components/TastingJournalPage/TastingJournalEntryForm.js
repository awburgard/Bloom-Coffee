import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

class TastingJournalEntryForm extends Component {
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
        uniformity: ''
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SHOPS',
            payload: { city_id: this.props.reduxState.user.home_city }
        })
        this.props.dispatch({
            type: 'GET_ENTRIES'
        })
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    addEntry = (event) => {
        this.props.dispatch({
            type: 'ADD_ENTRY',
            payload: {
                description: this.state.description,
                coffee_name: this.state.coffee_name,
                coffee_shop_id: this.state.coffee_shop_id,
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
                user_id: this.props.reduxState.user.user_id,
            }
        })
    };

    render() {
        const shopOptions = this.props.reduxState.getCoffeeShops.map((shop, index) => {
            return (
                <option value={shop.coffee_shop_id} key={index}>{shop.shop_name}</option>
            )
        })
        const journalEntries = this.props.reduxState.tastingJournalEntries.map((entry, index) => {
            return (
                <div key={index}>
                    <p>{entry.coffee_shop_id}</p>
                    <p>{entry.description}</p>
                    <p>{entry.coffee_name}</p>
                    <p>{entry.overall}</p>
                    <p>{entry.aroma}</p>
                    <p>{entry.aftertaste}</p>
                    <p>{entry.acidity}</p>
                    <p>{entry.sweetness}</p>
                    <p>{entry.mouthfeel}</p>
                    <p>{entry.balance}</p>
                    <p>{entry.clean_cup}</p>
                    <p>{entry.uniformity}</p>
                </div>
            )
        })

        return (
            <div>
                <TextField id="standard-name" name="message" rows="10" cols="30" value={this.state.description} onChange={this.handleInputChangeFor('description')}>
                    Your Description Here
                </TextField>
                <select type="text" placeholder="coffee shop name" onChange={this.handleInputChangeFor('coffee_shop_id')}>
                    {shopOptions}
                </select>
                <Input type="text" placeholder="coffee name" value={this.state.coffee_name} onChange={this.handleInputChangeFor('coffee_name')} />
                <Input type="number" placeholder="overall" value={this.state.overall} onChange={this.handleInputChangeFor('overall')} />
                <Input type="number" placeholder="aroma" value={this.state.aroma} onChange={this.handleInputChangeFor('aroma')} />
                <Input type="number" placeholder="flavor" value={this.state.flavor} onChange={this.handleInputChangeFor('flavor')} />
                <Input type="number" placeholder="aftertaste" value={this.state.aftertaste} onChange={this.handleInputChangeFor('aftertaste')} />
                <Input type="number" placeholder="acidity" value={this.state.acidity} onChange={this.handleInputChangeFor('acidity')} />
                <Input type="number" placeholder="sweetness" value={this.state.sweetness} onChange={this.handleInputChangeFor('sweetness')} />
                <Input type="number" placeholder="mouthfeel" value={this.state.mouthfeel} onChange={this.handleInputChangeFor('mouthfeel')} />
                <Input type="number" placeholder="balance" value={this.state.balance} onChange={this.handleInputChangeFor('balance')} />
                <Input type="number" placeholder="clean cup" value={this.state.clean_cup} onChange={this.handleInputChangeFor('clean_cup')} />
                <Input type="number" placeholder="uniformity" value={this.state.uniformity} onChange={this.handleInputChangeFor('uniformity')} />
                <Button onClick={this.addEntry}>Add Entry</Button>
                {journalEntries}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TastingJournalEntryForm);
