const React = require('react');

class Reset extends React.Component {
  render() {
    return(
      <div>
       <button
       className="reset-button"
       onClick={this.props.reset}
       >
       Reset
     </button>
      </div>
    )
  }
}

export default Reset;
