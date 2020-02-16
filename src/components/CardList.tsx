import React from 'react';
import Card from './Card';
import Profile from '../types/Profile';

type Props = {
    profiles: Profile[];
};

const CardList: React.FC<Props> = (props) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    );
};

export default CardList;