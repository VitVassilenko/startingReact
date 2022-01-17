import React from 'react';
import { HashRouter, Routes , Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
      </Routes>
    </HashRouter>
  );
}

export default App;