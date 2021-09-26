import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <h3>React CRUD</h3>
        </div>
        <div>
          <Route exact path="/" component={Create} />
        </div>
        <div style={{ marginTop: 25 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Delete} />
      </div>
    </BrowserRouter>
  );
}

export default App;

