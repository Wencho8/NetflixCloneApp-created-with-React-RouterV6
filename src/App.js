import { BrowserRouter } from "react-router-dom"; //ROUTER
import { Route, Routes, Navigate} from "react-router-dom";
import bg from "./assets/bg.jpg";
import netflixIcon from "./assets/netflix.svg";
import React, {Suspense} from "react";
import LoadingSpinner from "./ui/LoadingSpinner";


const LoginForm = React.lazy(() => import("./components/LoginForm"));
const Central = React.lazy(() => import("./components/Central"));


function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={ <div className="centered">
            <LoadingSpinner />
          </div>}>
      <Routes>
      <Route path="*" element={<h1 style={{ color: "white" }}>404 NOT FOUND</h1>}/>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/main" element={<Central />} />
      <Route path="/login" element={
          <div className="login" style={{ backgroundImage: `url(${bg})` }}>
            <img className="netflix" src={netflixIcon} alt="icono" />
            <div>
              <LoginForm />
            </div>
          </div>
        }
      ></Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;

/*

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='*' element={<h1 style={{color:'white'}}>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/main" element={<Central />} />
          <Route
            path="/login"
            element={
              <div className="login" style={{ backgroundImage: `url(${bg})` }}>
                <img className="netflix" src={netflixIcon} alt="icono" />
                <div>
                  <LoginForm />
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
*/
