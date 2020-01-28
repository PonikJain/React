import React from "react";
import Square from "./square.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squeares: Array(9).fill(null),
      isXState: true
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squeares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squeares.slice();

    if (calculateWinner(this.state.squeares)) {
      return;
    }
    const displaySign = this.state.isXState ? "X" : "O";

    squares[i] = displaySign;
    this.setState({ squeares: squares, isXState: !this.state.isXState });
  }

  render() {
    const winner = calculateWinner(this.state.squeares);
    let status;
    if (winner) {
      status = "Winner:" + winner;
    } else {
      status = "Nextplayer:" + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(a + " " + b + " " + c);
      return squares[a];
    }
  }
  return null;
}

export default Board;
