import './singlePost.css';
import { BasicNav } from '../../components/Navbar/Navbar';
import Comment from '../../components/Comment/Comment';
import Content from '../../components/Content/Content';
import PostComment from '../../components/PostComment/PostComment';
import commentImgFirst from '../../assets/comment-img1.png';
import commentImgSecond from '../../assets/comment-img2.png';
import Topbar from '../../components/Topbar/Topbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SinglePost() {
  // 유저 프로필 상태
  const [userProfileImg, setUserProfileImg] = useState('');
  // 유저 닉네임 상태
  const [userName, setUserName] = useState('');
  // 유저 id 상태
  const [userId, setUserId] = useState('');
  // 게시글 내용 상태
  const [contentText, setContentText] = useState('');
  // 게시글 이미지 상태
  const [contentImg, setContentImg] = useState('');
  // 좋아요 count 상태
  const [likeCount, setLikeCount] = useState('');
  // 댓글 개수 상태
  const [commentCount, setCommentCount] = useState('');
  // 포스트 업로드 날짜 
  const [uploadDate, setUploadDate] = useState('');

  // 포스트 고유 아이디
  const location = useLocation();
  const postUniqueId = location.state.postId;

  // 사용할 url, token, accountname
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = window.localStorage.getItem('token');
  const accountname = window.localStorage.getItem('accountname');

  // 게시글 정보 
  const getPostInfo = async () => {
    const postInfoPath = `/post/${postUniqueId}`

    try {
      const res = await fetch(url + postInfoPath, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        }
      })
      const json = await res.json();
      console.log(json);
      setUserProfileImg(json.post.author.image);
      setUserName(json.post.author.username);
      setUserId(json.post.author.accountname);
      setContentText(json.post.content);
      setContentImg(json.post.image);
      setLikeCount(json.post.heartCount);
      setCommentCount(json.post.commentCount);
      setUploadDate(json.post.createdAt.slice(0,11).replace('-','년 ').replace('-', '월 ').replace('T', '일'));
    } catch (error) {
      
    }
  }
  getPostInfo();



  return (
    <div className="singlePostWrap">
      <Topbar />
      <BasicNav />
      <section className="singlePostMain">
        <section className="singlePostContainer">
          <Content
            userImg={userProfileImg}
            userName={userName}
            userId={userId}
            posttext={contentText}
            postImg={contentImg}
            heartNum={likeCount}
            commentNum={commentCount}
            postDate={uploadDate}
          />
        </section>
        <ul className="postCommentWrap">
          <PostComment
            commentUserImg={commentImgFirst}
            commentUserName="서귀포시 무슨 농장"
            commentTimeNum="5분 전"
            commenttext="게시글 답글 ~~ !! 최고최고"
          />
          <PostComment
            commentUserImg={commentImgSecond}
            commentUserName="감귤러버"
            commentTimeNum="15분 전"
            commenttext="안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요 땡뻘땡뻘..."
          />
        </ul>
      </section>
      <Comment />
    </div>
  );
}
