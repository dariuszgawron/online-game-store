import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "",
                    loading: false};
  }

  callApi() {
    this.setState({ loading: true});
    fetch("http://localhost:4001/products/13")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res, loading: true }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>

        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.loading}</p>
      </div>
    )
  }
}

// class myComponent extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://localhost:4001/products';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//   }
// }
// export default myComponent;

export default App;


// componentDidMount() {
//   // Simple POST request with a JSON body using fetch
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'React POST Request Example' })
//   };
//   fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//       .then(response => response.json())
//       .then(data => this.setState({ postId: data.id }));
// }

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })