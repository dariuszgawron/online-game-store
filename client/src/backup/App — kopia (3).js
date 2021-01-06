import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Users from './Components/users';
import Navbar from './Components/Navbar/navbar';

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <Navbar />
      </header>
      <main className="app__main">
        <p>
          My first React website!
        </p>
      </main>
      <footer className="app__footer">

      </footer>
    </div>
  )
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {contacts: []};
//   }

//   componentDidMount() {
//     const url = 'http://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then(res => res.json())
//       .then(data=>{
//         this.setState({contacts: data})
//       })
//       .catch(console.log)
//   }
  
//   render() {
//     return (
//       <Users users={this.state.contacts} />
//     )
//   }
// }

export default App;