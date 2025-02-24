import { Navigate, Route, Routes } from 'react-router-dom';
import {routes} from './router/routes'
function App() {
  return (
    <Routes>
      {
        routes.map(route => 
          <Route key={route.path} path={route.path} Component={route.Element}/>
        )
      }
      <Route path="*" element={<Navigate to="/main" replace/>}/>
    </Routes>
  );
}

export default App;
 