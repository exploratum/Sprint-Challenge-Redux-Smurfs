import React from 'react'

import {Link} from 'react-router-dom'

const Smurf = (props) => {
    return(
        <div className='smurf'>
            <p>{`${props.smurf.name} - 
                age: ${props.smurf.age}, 
                height: ${props.smurf.height}`}
            </p>
            <button><Link to={`/smurfs/${props.smurf.id}`}>select</Link></button>
        </div>
    )
}

export default Smurf