import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ReactRouterDom from "./component/ReactRouterDom";

// 가운데 정렬
// 너비 화면의 60프로 --> px값으로 절대값 가능
// 필요시 border 추가해서 사용
function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{width: "60%", /*border: "1px solid"*/}}>
        <BrowserRouter>
          <Routes>
            <Route path="/:id" element={<ReactRouterDom />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
