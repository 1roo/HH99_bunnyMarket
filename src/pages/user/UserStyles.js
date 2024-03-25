import styled from 'styled-components';

const HelloSpan = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

const TelInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91%;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid black;
    margin: 0 auto;
    font-size: 20px;
    padding-left: 12px;
`;

const VerificationBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid lightgray;
    color: ${(props) => (props.active === 'true' ? 'white' : 'lightgray')};
    background-color: ${(props) => (props.active === 'true' ? '#FF6F0F' : 'white')};
    cursor: ${(props) => (props.active === 'true' ? 'pointer' : 'default')};
    font-size: 20px;
    font-weight: 500;
    margin: 15px auto;
    font-size: 20px;
    pointer-events: ${(props) => (props.active === 'true' ? 'auto' : 'none')};
`;

const ChangeTelDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;

    span:last-child {
        cursor: pointer;
        text-decoration-line: underline;
    }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;


const ModalContent = styled.div`
  width: 430px;
  margin: 0 auto;
  text-align: center;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 80%;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 430px;
  margin: 0 auto;
  height: 50px;
  background-color: #FF6F0F;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const CurrentLocationButton = styled.button`
  display: flex;
    align-items: center;
    justify-content: center;
    width: 92%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid lightgray;
    color: ${(props) => (props.active === 'true' ? 'white' : 'lightgray')};
    background-color: ${(props) => (props.active === 'true' ? '#FF6F0F' : 'white')};
    cursor: ${(props) => (props.active === 'true' ? 'pointer' : 'default')};
    font-size: 20px;
    font-weight: 500;
    margin: 0 auto 15px;
    font-size: 20px;
    pointer-events: ${(props) => (props.active === 'true' ? 'auto' : 'none')};
`;

const SearchResults = styled.div`
  position: absolute;
  top: 65px;
  left: 60px;
  width: 81%;
  overflow-y: auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  z-index: 999;
`;

const ResultItem = styled.div`
  padding: 8px;
  cursor: pointer;
  text-align: left;
  font-size: 15px;
  &:hover {
    background-color: lightgray;
  }
`;


const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ProfileImageLabel = styled.label`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
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

const StyledInput2 = styled.input`
  margin-bottom: 20px;
  height: 50px;
  width: 92%;
  border-radius: 5px;
`;


export {
  HelloSpan,
  TelInput,
  VerificationBtn,
  ChangeTelDiv,
  ErrorMessage,
  ModalContent,
  StyledInput,
  SubmitButton,
  CurrentLocationButton,
  SearchResults,
  ResultItem,
  ProfileImageContainer,
  ProfileImage,
  ProfileImageLabel,
  ProfileImageInput,
  ProfileImageIcon,
  StyledInput2
};

