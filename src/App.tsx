import React from 'react';
import './App.css';
import CardList from './components/CardList';

type Props = {
  title: string;
}

class App extends React.Component<Props> {

  render() {
    return (
      <div id="container">
        <div className="header">{this.props.title}</div>
        <CardList /> 
      </div>
    );
  }
}

export default App;
