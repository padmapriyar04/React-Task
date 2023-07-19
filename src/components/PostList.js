import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchData(); // Fetch data initially
    this.interval = setInterval(this.fetchData, 5000); // Fetch data every 5 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is unmounted
  }

  fetchData = () => {
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleButtonClick(punchline) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(punchline); // Display the punchline in the new tab
    newWindow.document.close();
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='post-card'>
        <div className='card-content'>
          <h2>{posts.setup}</h2>
          <button onClick={() => this.handleButtonClick(posts.punchline)}>Punchline</button>
        </div>
      </div>
    );
  }
}

export default PostList;
