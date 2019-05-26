import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch(`http://localhost:3000/api/v1/articles.json`)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
              isLoaded: true,
              articles: resp
            })
            console.log(this.state.articles)
        })
    };

    render() {
    var { isLoaded, articles } = this.state;
    return (
      <div>
      <p>test</p>
        {articles.map(item => item.id ) }
      </div>
    );
  }
}

export default App;
