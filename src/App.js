import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
