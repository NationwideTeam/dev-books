import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Button from '../../components/Buttons/Button';

import {
  NotFoundFeed,
  NotFoundMain,
  NotFoundLogo,
  NotFoundDescription,
} from './notFound.style';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundFeed>
      <Topbar />
      <NotFoundMain>
        <NotFoundLogo />
        <NotFoundDescription>
          이미지를 찾을 수 없습니다. :&#40;
        </NotFoundDescription>
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          <Button className={'lg button'} children={'이전 페이지'} />
        </div>
      </NotFoundMain>
    </NotFoundFeed>
  );
};

export default NotFound;
