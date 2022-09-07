import React from 'react';
import {
  PostCommentList,
  CommentUser,
  CommentUserImg,
  CommentUserName,
  CommentTime,
  CommentText,
  MoreCommentBtn
} from './postComment.style';

export default function PostComment(props) {
  return props.commentInfo.map((file, index) => {
    return (
      <PostCommentList className="postComment" key={index}>
        <CommentUser className="commentUser">
          <CommentUserImg
            className="commentUserImg"
            src={file.author.image}
            alt="유저 기본 프로필 이미지"
          />
          <CommentUserName className="commentUserName">{file.author.username}</CommentUserName>
          <CommentTime className="commentTime">
            {file.createdAt
              .slice(0, 11)
              .replace('-', '년 ')
              .replace('-', '월 ')
              .replace('T', '일')}
          </CommentTime>
          <MoreCommentBtn
            type="button"
            onClick={props.onClick}
            value={file.author.accountname}
          ></MoreCommentBtn>
        </CommentUser>
        <CommentText className="commenttxt">{file.content}</CommentText>
      </PostCommentList>
    );
  });
}
