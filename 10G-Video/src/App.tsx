import './App.css'
import {Routes,Route} from "react-router-dom";
import { AppPages } from './routes';
function App() {

  return (
    <>
    <Routes>
      {AppPages?.map(({path,Page:Component})=>(
         <Route path={path} element={<Component/>}/>
      ))}
      </Routes>
    </>
  )
}

export default App;
