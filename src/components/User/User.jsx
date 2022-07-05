import React from 'react';
import './user.css';
import basicProfile from '../../assets/basic-profile-img.png';

export const UserSearch = () => {
    return (
        <li className='userSearchList'>
            <img src={basicProfile} alt="유저 기본 프로필 이미지" />
            <div className='userInfo'>
                <strong className='userName'>
                    <span>애월읍</span> 위니브 감귤농장
                </strong>
                <strong className='userId'>
                    @ weniv_Mandarin
                </strong>
            </div>
        </li>
    )
}

export const UserFollow = () => {
    return (
        <li className='userSearchList'>
            <img src={basicProfile} alt="유저 기본 프로필 이미지" />
            <div className='userInfo'>
                <strong className='userName'>
                    애월읍 위니브 감귤농장
                </strong>
                <strong className='userId'>
                    @ weniv_Mandarin
                </strong>
            </div>
            <button className='userFollowButton'>팔로우</button>
        </li>
    )
}