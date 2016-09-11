const React = require('react');

class Range extends React.Component {
  render() {
    return (
     <div>
      <input placeholder="Min"/>
      <input placeholder="Max"/>
      <button>Set Range</button>
     </div>
    )
  }
}

export default Range;
