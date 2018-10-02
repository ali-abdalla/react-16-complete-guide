import React from 'react';

const userOutput = (props) => {
    const style = {
        alignText: 'center',
        fontWeight: 'bold',
        fontSize: 'Monospace'
    }

    return <div><p style={style}>Username: {props.username}</p></div>
}

export default userOutput;