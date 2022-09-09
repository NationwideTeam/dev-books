import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchNav } from '../../components/Navbar/Navbar';
import { UserSearch } from '../../components/User/User';
import Topbar from '../../components/Topbar/Topbar';

import {
  SearchFeedSection,
  SearchFeedMain,
  SearchList,
} from './searchFeed.style';
import basicProfile from '../../assets/basic-profile.svg';
import SearchImg1 from '../../assets/search-img1.png';
import SearchImg2 from '../../assets/search-img2.png';

const SearchFeed = () => {
  let navigate = useNavigate();
  const next = () => {
    navigate('/yourProfile');
  };
  return (
    <SearchFeedSection>
      <Topbar />
      <SearchNav />
      <SearchFeedMain>
        <SearchList>
          <UserSearch
            click={next}
            picture={basicProfile}
            name={'애월읍 위니브 감귤농장'}
            id={'@ weniv_Mandarin'}
          />
          <UserSearch
            click={next}
            picture={SearchImg1}
            name={'애월읍 한라봉 최고 맛집'}
            id={'@ hanlabong'}
          />
          <UserSearch
            click={next}
            picture={SearchImg2}
            name={'감귤의 품격 - 애월읍'}
            id={'@ mandarin_king'}
          />
        </SearchList>
      </SearchFeedMain>
    </SearchFeedSection>
  );
};

export default SearchFeed;
