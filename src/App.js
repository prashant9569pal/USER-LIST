import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvider from "./context/DataProvider";
function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/info" element={<Card />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
