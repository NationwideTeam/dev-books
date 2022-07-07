import React from 'react';
import { SearchNav } from '../../components/Navbar/Navbar';
import { UserSearch } from '../../components/User/User';
import Topbar from '../../components/Topbar/Topbar';

import basicProfile from '../../assets/basic-profile.svg'
import SearchImg1 from '../../assets/search-img1.png';
import SearchImg2 from '../../assets/search-img2.png';

import './searchFeed.css'

const SearchFeed = () => {
  return (
    <section className='searchFeed'>
      <Topbar />
      <nav className='searchFeedNav'>
        <SearchNav />
      </nav>
      <main className='searchFeedMain'>
        <ul className='searchLists'>
          <UserSearch picture={basicProfile} name={'애월읍 위니브 감귤농장'} id={'@ weniv_Mandarin'}/>
          <UserSearch picture={SearchImg1} name={'애월읍 한라봉 최고 맛집'} id={'@ hanlabong'}/>
          <UserSearch picture={SearchImg2} name={'감귤의 품격 - 애월읍'} id={'@ mandarin_king'}/>
        </ul>
      </main>
    </section>
  )
}

export default SearchFeed;