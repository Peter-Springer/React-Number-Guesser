const React = require('react');

class Number extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Number: {this.props.number}</h1>
      </div>
    )
 }

}

export default Number;
