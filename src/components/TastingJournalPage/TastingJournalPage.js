import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class TastingJournal extends Component {
    state = {
        description: '',
        coffee_name: '',
        coffee_shop_name: '',
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

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      }

    render() {
        return (
            <div>
                  <textarea name="message" rows="10" cols="30" value={this.state.description}>
                    Your Description Here
                </textarea>
                <input type="text" placeholder="coffee shop name" value={this.state.coffee_shop_name} onChange={this.handleInputChangeFor('coffee_shop_name')}/>
                <input type="text" placeholder="coffee name"value={this.state.coffee_name} onChange={this.handleInputChangeFor('coffee_name')}/>
                <input type="number" placeholder="overall"value={this.state.overall} onChange={this.handleInputChangeFor('overall')}/>
                <input type="number" placeholder="aroma"value={this.state.aroma} onChange={this.handleInputChangeFor('aroma')}/>
                <input type="number" placeholder="flavor"value={this.state.flavor}/>
                <input type="number" placeholder="aftertaste"value={this.state.aftertaste}/>
                <input type="number" placeholder="acidity"value={this.state.acidity}/>
                <input type="number" placeholder="sweetness"value={this.state.sweetness}/>
                <input type="number" placeholder="mouthfeel" value={this.state.mouthfeel}/>
                <input type="number" placeholder="balance" value={this.state.balance}/>
                <input type="number" placeholder="clean cup" value={this.state.clean_cup}/>
                <input type="number" placeholder="uniformity" value={this.state.uniformity}/>
                <button />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TastingJournal);
