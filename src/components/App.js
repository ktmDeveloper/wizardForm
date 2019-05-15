import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: 'app header',
      data: []
    }

    this.ch = this.ch.bind(this)
  }
  componentDidMount(){
    fetch('/api/contests')
    .then((d) => d.json())
    .then((djson) => {
      this.setState({
        data: djson['contests']
      })
    })
  }
  ch() {
    this.setState({
      nn: !this.state.nn
    })
  }
  render(){
    return (
      <div className="App">
       <h2 onClick = {this.ch}>
       {this.state.header}
        </h2>
        <ul>
          {this.state.data.map((d, i) => (
            <h2 key = {i}>
              {this.state.nn ? d.categoryName : d.contestName}
            </h2>
          ))}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.object
};