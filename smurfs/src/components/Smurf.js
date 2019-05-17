import React from 'react'

const Smurf = (props) => {
    return(
        <div className='smurf'>
            <p>{`${props.smurf.name} - 
                age: ${props.smurf.age}, 
                height: ${props.smurf.height}`}
            </p>
        </div>
    )
}

export default Smurf