import {
  PostCommentList,
  CommentUser,
  CommentUserImg,
  CommentUserName,
  CommentTime,
  CommentTxt,
  MoreCommentBtn,
} from "./postComment.style";

export default function PostComment(props) {
  return props.commentInfo.map((file, index) => {
    return (
      <PostCommentList key={index}>
        <CommentUser>
          <CommentUserImg src={file.author.image} />
          <CommentUserName>{file.author.username}</CommentUserName>
          <CommentTime>
            {file.createdAt
              .slice(0, 11)
              .replace("-", "년 ")
              .replace("-", "월 ")
              .replace("T", "일")}
          </CommentTime>
          <MoreCommentBtn
            onClick={props.onClick}
            value={file.author.accountname}
          ></MoreCommentBtn>
        </CommentUser>
        <CommentTxt>{file.content}</CommentTxt>
      </PostCommentList>
    );
  });
}
