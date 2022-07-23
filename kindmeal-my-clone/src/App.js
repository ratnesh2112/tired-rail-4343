import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { ForgetPassword } from './Pages/ForgetPassword';
// import {Signup} from './Pages/Signup'
// import { SignupButtonBox } from './Pages/SignupButtonBox';

// import { MealDealsAbout } from './Components/MealDeals/MealDealsAbout/MealDealsAbout' 
// import {BottomPoster} from './Components/MealDeals/MealDealsPosters/BottomPoster'
// import {TopPoster} from './Components/MealDeals/MealDealsPosters/TopPoster'
// import {MealDealsNavigation} from './Components/MealDeals/Navigation/MealDealsNavigation'




function App() {
  return (
    <div className="App">
     
     <AllRoutes />
     {/* <Signup />
     <SignupButtonBox /> */}
    {/* <ForgetPassword /> */}
    </div>
  );
}

export default App;
