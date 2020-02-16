import React, { FormEvent } from 'react';
import Profile from '../types/Profile';
import axios from 'axios';

type Props = {
  onSubmit: (profile: Profile) => void;
  onClear: (event: FormEvent) => void;
};

class Form extends React.Component<Props> {
    state = { username: ''};
    usernameInput: React.RefObject<HTMLInputElement> = React.createRef();

    handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
        const {name, avatar_url, company, html_url} = resp.data;
        const profile: Profile = { name, avatar_url, company, html_url };
        this.props.onSubmit(profile);
        this.state.username = '';
        if (this.usernameInput.current?.value) {
            this.usernameInput.current.value = '';
        }
    };

    render() {
        return (
            <form onSubmit={(event: FormEvent) => this.handleSubmit(event)}>
                
                <div className="input-group mb-3">
                    <input 
                        className="form-control" 
                        placeholder="Github username" 
                        required
                        autoFocus
                        onChange={event => this.setState({ username: event.target.value })}
                        ref={this.usernameInput}
                        value={this.state.username}/>
                    <div className="input-group-prepend">
                        <button className="btn btn-primary">Add Card</button>
                    </div>
                    <div className="input-group-prepend">
                        <button className="btn btn-danger" onClick={this.props.onClear}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;