import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';

function App() {
  return (
    <div className="App">
      <div>
        <h3>React CRUD</h3>
      </div>
      <div>
        <Create />
      </div>
      <div style={{ marginTop: 25 }}>
        <Read />
      </div>
    </div>
  );
}

export default App;

