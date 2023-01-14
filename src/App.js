
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    content: null,
    author: null,
    image: null
  }
 async componentDidMount() {
const urlContent = "https://api.quotable.io/random";
const urlFox =  "https://randomfox.ca/floof/";
const responseContent = await fetch(urlContent);
const responseFox = await fetch(urlFox);
const dataContent = await responseContent.json();
const dataFox = await responseFox.json();
this.setState({content:dataContent.content, author:dataContent.author, image:dataFox.image})

  }
  render() {
  return (
    
      <div>
        <img className='fox' src={this.state.image}  width="400px" height="500px" alt="fox" />
        <p className='parContent'>{this.state.content}</p>
        <p className='parAuthor'>{this.state.author}</p>
        
        </div>
    
  );
}
}
export default App;
