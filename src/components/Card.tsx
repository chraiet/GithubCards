import React from 'react';

type Props = {
    name: string;
    avatar_url: string;
    company: string;
    html_url: string;
};

class Card extends React.Component<Props> {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
                <img src={profile.avatar_url} style={{width:'120px', verticalAlign:'top'}}/>
                <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                    <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                    <div className="profileLink" style={{fontSize:'70%'}}>
                        <a href={profile.html_url} target="_blank">
                            Profile link <i className="fa fa-external-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;