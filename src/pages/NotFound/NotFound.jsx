import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Logo404 from '../../assets/logo-404.svg';
import Button from '../../components/Buttons/Button';

import './notFound.css'

const NotFound = () => {
  return (
    <section className='NotFoundFeed'>
      <Topbar />
      <main className='NotFoundMain'>
        <img className='NotFoundLogo' src={Logo404} alt="데브북스 404 logo"/>
        <strong className='NotFoundDescription'>
          이미지를 찾을 수 없습니다. :&#40;
        </strong>
        <Button className={'lg button'} children={'이전 페이지'}/>
      </main>
    </section>

  )
}

export default NotFound;
