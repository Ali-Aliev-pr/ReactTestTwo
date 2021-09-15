import React from 'react';

class Analougas extends React.Component {
    render() {
        const style = {
            backgroundColor: this.props.color,
            height: 150,
            width: 400,
            borderRadius: 5,
            display: 'flex'
        };
        return (
            <div style={style}></div>
        )
    }
}

export default Analougas;