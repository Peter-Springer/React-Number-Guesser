const React = require('react');

class Range extends React.Component {
  render() {
    return (
     <div>
      <input onChange={this.props.handleMinRange} placeholder="Min"/>
      <input onChange={this.props.handleMaxRange} placeholder="Max" value={this.props.minRange}/>
      <button onClick={this.props.setRange}>Set Range</button>
     </div>
    )
  }
}

export default Range;
