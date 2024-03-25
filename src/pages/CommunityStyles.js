import styled from 'styled-components';
import bear from '../images/bear.png';

const Header = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
  }
`;

const HeaderRight = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
const CommunityWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  padding: 10px;
  margin-bottom: 50px;
`;

const CommunityContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`;

const CommunityTitle = styled.div`
  font-size: 18px;
  padding: 5px 0px;
`;

const CommunityContent = styled.div`
  font-size: 14px;
  color: gray;
`;

const CommunityImage = styled.img`
  padding-top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  float: right;
`;

const CommunityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunitySubBox = styled.div`
  padding-top: 5px;
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
`;

const CommunitySubBoxLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunityDetailBox = styled.div`
  display: flex;
  margin: 5px 0px;
  /* border: 1px solid black; */
`;

const CommumnityDetailHeaderSub = styled.div`
  font-size: 12px;
  color: gray;
`;

const CommunityDetailCnt = styled.div``;

const UserImage = styled.div`
  background-image: url(${bear});
  background-size: cover;
  width: 30px;
  height: 30px;
  /* border: 1px solid black; */
  border-radius: 50px;
  margin-right: 5px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;
const CommunityDetailTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CommunityDetailContent = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

const CommunityCountBox = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 14px;
`;

const CommunityDetailLikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 5px;
`;

const CommunityDetailLikeAndSave = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  /* width: 65px; */
  height: 30px;
  font-size: 12px;
  padding: 0px 20px;
  justify-content: center;
`;

const CommunityDetailCommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;
const CommunityDetailFirstCommentBox = styled.div`
  padding: 10px;
  /* border: 1px solid black; */
`;

const CommunityLike = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`;

const CommunityDetailFirstComment = styled.div`
  margin: 5px 0px 0px 35px;
`;
const CommunityDetailSecondCommentBox = styled.div`
  padding: 10px;
  margin-left: 35px;
`;

const CommunityWriteBox = styled.div``;
const CommunityWriteCategory = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const CommunityWriteCategoryTitle = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CommunityCateogyList = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
`;
const CategoryList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 5px 0px;
`;
const CommunityWriteTitle = styled.input`
  width: 97%;
  height: 5vh;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 3px;
  border: none;
  :focus {
    outline-color: #ff6f0f;
  }
`;

const CommunityWriteContent = styled.textarea`
  display: flex;
  align-items: center;
  width: 97%;
  height: 50vh;
  font-size: 16px;
  color: gray;
  padding: 5px 3px;
  resize: none;
  line-height: 1.5;
  border: none;
`;

const CommunityWriteFooter = styled.div`
  display: flex;
  align-items: center;
  height: 2vh;
  padding: 5px 0px;
  p {
    font-size: 12px;
  }
  label {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
  }
`;

const CommunityDetailRecomment = styled.div`
  padding-left: 15%;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;

  input {
    border-radius: 15px;
    border-style: none;
    background-color: #d3d3d359;
    padding: 10px 7px;
    width: 80%;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: ${({ isOpen }) =>
    isOpen
      ? '0'
      : '-100%'}; // 모달이 열리면 아래에서 위로 올라오게 설정
  left: 0;
  width: 100%;
  /* height: 20%; // 모달 높이 설정 */
  background-color: white;
  transition: bottom 1s ease; // 모달 열림/닫힘 애니메이션 효과
  z-index: 999; // 다른 요소 위에 나타나도록 설정
`;

const ModalContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* align-items: center; */
  button {
    border: none;
    background-color: transparent;
    padding: 10px;
  }
`;

// 모달 배경 스타일
const ModalDeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.25
  ); /* 흐림 효과를 위한 반투명 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* 다른 요소들 위에 띄우기 위한 z-index 설정 */
`;

// 모달 내용 스타일
const ModalDeleteContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 모달 삭제 버튼 스타일
const DeleteButton = styled.button`
  border: 1px solid lightgray;
  width: 100px;
  background-color: #ff6f0f;
  padding: 20px;
  border-radius: 10px;
`;
// 모달 삭제 취소 버튼 스타일
const CancelButton = styled.button`
  border: 1px solid lightgray;
  width: 100px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalButtons = styled.div``;

const FooterLeft = styled.div`
  margin-left: 5px;
`;
const CommunityDetailImage = styled.img.attrs(
  (props) => ({
    src: props.src,
  }),
)`
  border-radius: 10px;
  width: 100%;
  margin: 5px 0px;
`;
export {
  Header,
  HeaderRight,
  Container,
  CommunityWrapper,
  CommunityContainer,
  CommunityTitle,
  CommunityContent,
  CommunityImage,
  CommunityBox,
  CommunitySubBox,
  CommunitySubBoxLeft,
  CommunityDetailBox,
  CommumnityDetailHeaderSub,
  CommunityDetailCnt,
  CommunityDetailTitle,
  CommunityDetailContent,
  CommunityDetailCommentHeader,
  CommunityCountBox,
  CommunityDetailLikeAndSave,
  CommunityDetailFirstCommentBox,
  CommunityDetailFirstComment,
  CommunityDetailSecondCommentBox,
  CommunityDetailImage,
  CommunityLike,
  UserImage,
  CommunityDetailLikeBox,
  CommunityWriteTitle,
  CommunityWriteContent,
  CommunityWriteFooter,
  CommunityWriteBox,
  UserName,
  CommunityWriteCategory,
  CommunityCateogyList,
  Footer,
  FooterLeft,
  ModalContainer,
  ModalContent,
  ModalDeleteContainer,
  ModalDeleteContent,
  DeleteButton,
  CancelButton,
  CommunityDetailRecomment,
  CommunityWriteCategoryTitle,
  CategoryList,
  ModalButtons,
};
