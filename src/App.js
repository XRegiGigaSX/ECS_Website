import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import Developers from "./components/Developers/Developers";
import Faq from "./components/FAQ/Faq";
import Member from "./components/Members/Member";
import Resource from "./components/resource/resource";
import Gallery from "./components/Gallery/Gallery";
import Protected from "./Protected";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        {/* <Route path="/Login" element={<Login currentUser={currentUser} />} /> */}
        <Route
          path="/Developer"
          element={<Developers currentUser={currentUser} />}
        />
        <Route
          path="/ResourceHub"
          element={
            <Protected currentUser={currentUser}>
              <Resource
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Protected>
          }
        />
        <Route
          path="/Gallery"
          element={
            <Gallery
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/Faq"
          element={
            <Faq currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/Member"
          element={
            <Member currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        {/* <Route
          path="/SignUp"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        /> */}
      </Routes>
    </>
  );
}
export default App;
//use route to setup route for different pages
