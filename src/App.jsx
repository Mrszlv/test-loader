import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Glass from "./components/Glass/Glass";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Loader />}></Route>
          <Route path="/loader" element={<Loader />}></Route>
          <Route path="/glass" element={<Glass />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
