import React from 'react';
import './App.css';

function App() {

  const [ gameName, setGameName ] = useState();

  const numberOfGames = useSelector( state=> state.numberOfGames);
  const gameList = useSelector( state => state.gameList);

  const dispatch = useDispatch();

  const getAllGames = () => {
    
  }

  return (
    <div className="App">
        <h1>Welcome to Game Storage</h1>
    </div>
  );
}

export default App;
