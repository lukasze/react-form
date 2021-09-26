import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';

function App() {
  return (
    <div className="App">
      <h3>React CRUD</h3>
      <Create />
      <Read />
    </div>
  );
}

export default App;

