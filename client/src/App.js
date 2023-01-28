import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./scenes/global/Sidebar";
import { Topbar } from "./scenes/global/Topbar";
import { Main } from "./scenes/Main";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="content">
        <Sidebar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
