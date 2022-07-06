import React from 'react';
import './user.css';
import basicProfile from '../../assets/basic-profile-img.svg';

export const UserSearch = (props) => {
    return (
        <li className='userSearchList'>
            <img src={basicProfile} alt="유저 기본 프로필 이미지" />
            <div className='userInfo'>
                <strong className='userName'>
                    {props.name}
                </strong>
                <strong className='userId'>
                    {props.id}
                </strong>
            </div>
        </li>
    )
}

export const UserFollow = (props) => {
    return (
        <li className='userSearchList'>
            <img src={basicProfile} alt="유저 기본 프로필 이미지" />
            <div className='userInfo'>
                <strong className='userName'>
                    {props.name}
                </strong>
                <strong className='userId'>
                    {props.id}
                </strong>
            </div>
            <button className='userFollowButton'>{props.follow}</button>
        </li>
    )
}