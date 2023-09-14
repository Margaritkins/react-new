import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      {/* <UsersLoader/> */}
      <BrowserRouter>
        <header>
          <NavMenu />
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/commomBlock/" element={<CommonBlock />}>
              <Route path="one" element={<p>one part</p>} />
              <Route path="two" element={<p>two part</p>} />
              <Route path="three" element={<p>three part</p>} />
            </Route>
          </Routes>
        </main>

        <footer>&copy;2023</footer>
      </BrowserRouter>
    </>
  );
}

const CommonBlock = () => {
  <>
    <h1>CommonBlock</h1>
    <Outlet />
  </>;
};

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contacts = () => <h1>Contacts</h1>;
// const CommonBlock = ()=> <h1>CommonBlock</h1>
export default App;
