import React from 'react';

const ValueContext = React.createContext();

class ValueContextComponent extends React.Component {

    state = {
        textboxValue: ''
    }

    onTextChange = value => {
        this.setState({ textboxValue: value });
    }

    render() {
        const obj = {
            textboxValue: this.state.textboxValue,
            onTextChange: this.onTextChange
        }
        return (
            <ValueContext.Provider value={obj}>
                {this.props.children}
            </ValueContext.Provider>
        )
    }
}

export { ValueContextComponent, ValueContext }