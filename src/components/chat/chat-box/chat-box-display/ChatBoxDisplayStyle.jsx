import styled from 'styled-components';

const ChatBoxDisplayStyle = styled.ul`
  height: 85%;
  overflow: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0;

  & li {
    list-style-type: none;
    border-collapse: collapse;
    margin: 0;
  }
`;

export default ChatBoxDisplayStyle;
