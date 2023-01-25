import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        <p>devfinder</p>

        <button>Light Dark</button>
      </nav>

      <div>
        Search GitHub username...
        <button>Search</button>
      </div>

      <div>
        Joined
        <div>Repos Followers Following</div>
      </div>
    </div>
  );
}

export default App;
