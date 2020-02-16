import React, { FormEvent } from 'react';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';
import Profile from './types/Profile';

type Props = {
  title: string;
}

type State = {
  profiles: Profile[]
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  addNewProfile = (profile: Profile) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profile]
    }));
  };

  clearProfiles = (event: FormEvent) => {
    event.preventDefault();
    this.setState({
      profiles: []
    });
  };

  render() {
    return (
      <div id="container">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} onClear={this.clearProfiles}/>
        <CardList profiles={this.state.profiles}/> 
      </div>
    );
  }
}

export default App;
