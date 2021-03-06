import React from 'react';

class Analougas extends React.Component {
    render() {
        const style = {
            backgroundColor: this.props.color,
            height: 150,
            width: 400,
            borderRadius: 5,
            marginLeft: 50
        };
        const text = {
            marginLeft: 50
        }
        return (
            <div>
                <div style={style}></div>
                <p style={text}>{this.props.text}</p>
            </div>
        )
    }
}

export default Analougas;