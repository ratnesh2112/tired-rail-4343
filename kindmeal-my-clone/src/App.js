import logo from './logo.svg';
import './App.css';
import { SignupButtonBox } from './Pages/SignupButtonBox';
import {Routes,Route} from "react-router-dom"
import { ForgetPassword } from './Pages/ForgetPassword';
import { Signup } from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <SignupButtonBox/>
      <Routes>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
