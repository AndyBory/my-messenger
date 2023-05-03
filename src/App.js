import Messenger from "./components/Messenger";

const userData= {
  name: 'Ivan',
  message: prompt('Enter your message:'),
};

function App() {
  return (
    <Messenger user={userData}/>
  );
}

export default App;
