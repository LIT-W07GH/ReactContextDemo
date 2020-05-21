import React, { Component } from 'react';
import { ValueContext } from '../ValueContext';

const LevelOne = () => {
  return (
    <div>
      <h2>Level One component</h2>
      <LevelTwo />
    </div>
  )
}

const LevelTwo = () => {
  return (
    <div>
      <h2>Level Two component</h2>
      <LevelThree />
    </div>
  )
}

const LevelThree = () => {
  return (
    <ValueContext.Consumer>
      {value => {
        return (
          <div>
            <h2>Level Three component</h2>
            <h3>{value.textboxValue}</h3>
          </div>
        )
      }}

    </ValueContext.Consumer>
  )
}

export class Home extends Component {

  render() {
    return (
      <ValueContext.Consumer>
        {value => {
          return (
            <div>
              <input
                type="text"
                value={value.textboxValue}
                onChange={e => value.onTextChange(e.target.value)}
              />
              <h2>{value.textboxValue}</h2>
             <LevelOne />
            </div>
          )
        }}

      </ValueContext.Consumer>
    );
  }
}




