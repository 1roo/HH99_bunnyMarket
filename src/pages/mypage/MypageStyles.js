import styled from "styled-components";


const ModalContent = styled.div`
  padding: 0 14px;
`;

const SubmitButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #FF6F0F;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 0 17px;
`

const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;
`

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const PayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 120px;
  border: 1px solid #FF6F0F;
  border-radius: 5px;
  display: flex;
  margin: 0 auto 10px;
`

const PayBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-right: 10px;
  `

const PayImage = styled.img`
  width: 90px;
  height: 45px;
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 12px;
`

const PayButton = styled.button`
  width: 45%;
  height: 35px;
  cursor: pointer;
  background-color: #FF6F0F;
  color: white;
  border-radius: 5px;
  border: none;
`

const SectionBox = styled.div`
  margin: 25px 0;
`

const RoundBox = styled.div`
  width: 65px;
  height: 35px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const TitleP = styled.p`
  font-weight: 600;
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const FlexDiv2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const ProfileImage2 = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ProfileImageLabel = styled.label`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const ProfileImageIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5px; 
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: white;
  opacity: 50%;
  border-radius: 50%;
  padding-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }

  span {
    cursor: pointer;
    color: #FF6F0F;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NickInput = styled.input`
  width: 130px;
  height: 35px;
  border-radius: 5px;
  background-color: transparent;
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 29px;
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const TitleP2 = styled.p`
  text-align: left;
`

const StyledInput = styled.input`
  width: 98%;
  height: 35px;
  border-radius: 5px;
`

const StyledBtn = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background-color: #FF6F0F;
  padding: 10px 20px;
  border: 1px solid lightgray;
  color: ${(props) => (props.active === 'true' ? 'white' : 'lightgray')};
  background-color: ${(props) => (props.active === 'true' ? '#FF6F0F' : 'white')};
  cursor: ${(props) => (props.active === 'true' ? 'pointer' : 'default')};
  font-weight: 500;
  margin: 15px auto;
  pointer-events: ${(props) => (props.active === 'true' ? 'auto' : 'none')};
`

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`


export {
  ModalContent,
  SubmitButton,
  Container,
  ProfileBar,
  ProfileImage,
  PayDiv,
  PayBar,
  PayImage,
  ButtonBar,
  PayButton,
  SectionBox,
  RoundBox,
  TitleP,
  FlexDiv,
  FlexDiv2,
  ProfileImageContainer,
  ProfileImage2,
  ProfileImageLabel,
  ProfileImageInput,
  ProfileImageIcon,
  InputContainer,
  ProfileInfo,
  NickInput,
  UserInfoContainer,
  InfoDiv,
  InfoTitle,
  TitleP2,
  StyledInput,
  StyledBtn,
  StyledTitle
};