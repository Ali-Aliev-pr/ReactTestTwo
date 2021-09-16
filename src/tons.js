import React from "react";

class Tons extends React.Component {
    render() {
        const style = {
            backgroundColor: this.props.colors,
            height: 150,
            width: 400,
            borderRadius: 5,
            marginLeft: 50
        }

        const text = {
            marginLeft: 50
        }

        return (
            <div>
                <div style={style}></div>
                <p style={text}>{this.props.colors}</p>
            </div>
        )
    }
}

export default Tons;