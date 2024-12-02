import {Chat} from "./components/chat";
import {Details} from "./components/details";
import {List} from "./components/list";

const App = () => {
  return (
    <div className='app'>
      <div className="container">
          <List />
          <Chat />
          <Details />
      </div>
    </div>
  )
}

export default App