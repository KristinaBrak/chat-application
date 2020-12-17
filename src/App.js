import {ChatContextProvider} from './components/context/ChatContext';
import ChatContainer from './components/chat/ChatContainer';
import userId from './consts';

const App = () => (
  <ChatContextProvider>
    <ChatContainer userId={userId} />
  </ChatContextProvider>
);
export default App;
