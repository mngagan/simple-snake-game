import React, { Component } from "react";
import changeSnakePostion from './utils/changeSnakePosition'
import _ from 'underscore'

class App extends Component {
  state = {
    value: "this was created without using create-react-app",
    snakeLength: 4,
    position: [{ x: 100, y: 100 }, { x: 110, y: 100 }, { x: 120, y: 100 }, { x: 130, y: 100 }],
    lastMove: "left",
    timeStamp: 0,
    increase: false,
    bounds: { w: 400, h: 400 },
    food: { x: 100, y: 100 }
  };

  componentDidMount = () => {
    setInterval(() => {
      let isFoodCons = this.state.position[0].x == this.state.food.x && this.state.position[0].y == this.state.food.y
      console.log('isFood COns' , isFoodCons)
      this.setState({
        timeStamp: Date.now(),
        position: changeSnakePostion({ move: this.state.lastMove, position: this.state.position, increase: isFoodCons, bounds: this.state.bounds, isFoodCons }).position,
        snakeLength: this.state.increase ? this.state.snakeLength + 1 : this.state.snakeLength + 0,
        increase: false,
        food : isFoodCons ? this.generateRandomCoordinate() : this.state.food
      })
    }, 300);
    var that = this
    document.addEventListener('keydown', function (e) {
      var move = ''
      switch (e.keyCode) {
        case 37:
          move = 'left'
          break;
        case 38:
          move = 'up'
          break;
        case 39:
          move = 'right'
          break;
        case 40:
          move = 'down'
          break;
      }
      // that.setState(changeSnakePostion({ move, position: that.state.position }), () => { console.log('state updated') })
      move != '' && that.setState({
        lastMove: move
      })
    });

  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.timeStamp != nextState.timeStamp) {
      return true
    } else {
      return false
    }
  }
  generateRandomCoordinate = () => {
    let xs = _.pluck(this.state.positions, 'x')
    let ys = _.pluck(this.state.positions, 'y')
    let obj = { x: this.getRandomValue(xs, 'w'), y: this.getRandomValue(ys, 'h') }
    console.log('obj', obj)
    return obj

  }
  getRandomValue = (arr, arg2) => {
    let ran = _.random(0, this.state.bounds[arg2])
    return arr.indexOf(ran) == -1 && ran %10 == 0 ? ran : this.getRandomValue(arr, arg2)
  }
  getBox = () => {
    return (
      <React.Fragment>
        {this.state.position.map((val, i) =>
          <rect width="10" x={this.state.position[i].x} y={this.state.position[i].y} height="10" style={{ fill: 'rgb(0,0,255)', strokeWidth: 1, stroke: 'rgb(0,0,0)' }} />
        )}
        <rect width="10" x={this.state.food.x} y={this.state.food.y} height="10" style={{ fill: 'red', strokeWidth: 1, stroke: 'black' }} />
      </React.Fragment>
    )
  }
  test = () => {
    this.setState({ increase: true })
  }
  render() {
    return (
      <React.Fragment>
        <svg width={this.state.bounds.w} height={this.state.bounds.h} style={{ backgroundColor: 'green' }}>
          {this.getBox()}
        </svg>
        <button onClick={() => this.test()}>increase</button>
        <button onClick={() => this.generateRandomCoordinate()}>generate</button>
      </React.Fragment>

    );
  }
}
export default App;
