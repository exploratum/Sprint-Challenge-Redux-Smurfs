import React from 'react';
import {getSmurfs, addSmurf} from '../actions';
import {connect} from 'react-redux';
import Smurf from "./Smurf"



class SmurfList extends React.Component {

    state = {
        name:'',
        age: '',
        height: ''
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    handleChange = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

    handleAddSmurf = (event) => {
        event.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({name:'', age:'', height:''})
    }

    render() {
        return(
            <div className='friend-list'>
                { (this.props.addingSmurf || this.props.fetching) && 
                    <p> Fetching data...</p>}

                {this.props.smurfs && 
                    this.props.smurfs.map(smurf => 
                    <Smurf smurf={smurf} key={smurf.id} />
                    )}
                
                <h3>Enter New Smurf</h3>
                <form onSubmit={this.handleAddSmurf}>
                    <fieldset>
                        name: <input 
                            type='text' 
                            name='name' 
                            value={this.state.name}
                            onChange={this.handleChange}
                        /> <br/>
                        age: <input 
                            type='number' 
                            name='age' 
                            value={this.state.age}
                            onChange={this.handleChange}

                        /> <br/>
                        height: <input 
                            type='text' 
                            name='height' 
                            value={this.state.height}
                            onChange={this.handleChange}
                        /><br/>

                        <button type='submit'>Submit</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetching: state.fetching,
    addingSmurf: state.addingSmurf,
    smurfs: state.smurfs
});

export default connect(mapStateToProps, {getSmurfs, addSmurf})(SmurfList);