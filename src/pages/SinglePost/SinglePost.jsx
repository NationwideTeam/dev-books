import "./singlePost.css"
import {BasicNav} from "../../components/Navbar/Navbar"
import Comment from "../../components/Comment/Comment"
import Content from "../../components/Content/Content"
import PostComment from "../../components/PostComment/PostComment"
import basicProfile from "../../assets/basic-profile.svg"
import postImg from "../../assets/post-img-example.png"
import commentImgFirst from "../../assets/comment-img1.png"
import commentImgSecond from "../../assets/comment-img2.png"

export default function SinglePost() {

  return (
    <div className="singlePostWrap">
      <BasicNav/>
      <Content 
        userImg={basicProfile}
        userName="애월읍 위니브 감귤농장" 
        userId="@ weniv_Mandarin" 
        posttext= "옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다." 
        postImg={postImg}
        heartNum="58" 
        commentNum="12" 
        postDate="2020년 10월 21일" 
      />
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
      <Comment/>
    </div>
  )
}
