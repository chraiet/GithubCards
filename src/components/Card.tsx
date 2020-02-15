import React from 'react';

type Props = {
    name: string;
    avatar_url: string;
    company: string;
};

class Card extends React.Component<Props> {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
                <img src={profile.avatar_url} style={{width:'120px'}}/>
                <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                    <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;