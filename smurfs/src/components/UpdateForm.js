import React from 'react'
import {connect} from 'react-redux'
import {updateSmurf, deleteSmurf} from '../actions'

class UpdateForm extends React.Component{

    state = {
        foundSmurf: null
    }

    componentDidMount() {
        const foundSmurf = this.props.smurfs.find(smurf => this.props.match.params.id === `${smurf.id}`);
        console.log(foundSmurf);
        this.setState({foundSmurf: foundSmurf})
    }

    handleChange = (event) => {
        this.setState({
            foundSmurf: {...this.state.foundSmurf, [event.target.name]: event.target.value}
        })
    }

    handleUpdate = (event) => {
        event.preventDefault();
        this.props.updateSmurf(this.state.foundSmurf);
        this.props.history.push('/');
    }

    handleDelete = (event) => {
        event.preventDefault();
        this.props.deleteSmurf(this.state.foundSmurf);
        this.props.history.push('/');
    }


    render() {
        
        if(!this.state.foundSmurf) {
            return ("Finding Smurf...")
        }
        else {
            return (
                <div className='updateForm'>
                    <fieldset>
                        name: <input 
                            type='text' 
                            name='name' 
                            value={this.state.foundSmurf.name}
                            onChange={this.handleChange}
                        /> <br/>
                        age: <input 
                            type='number' 
                            name='age' 
                            value={this.state.foundSmurf.age}
                            onChange={this.handleChange}

                        /> <br/>
                        height: <input 
                            type='text' 
                            name='height' 
                            value={this.state.foundSmurf.height}
                            onChange={this.handleChange}
                        /><br/>

                        <button type='submit' onClick={this.handleUpdate}>update</button>
                        <button type='submit' onClick={this.handleDelete}>delete</button>
                    </fieldset>
                </div>
            );
            
        }
    }
    
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})
export default connect(mapStateToProps, {updateSmurf, deleteSmurf})(UpdateForm);