import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<DetailPage />} path="/:category/:placeId" />
      <Route element={<MyPage />} path="/:username" />
    </Routes>
  );
}

export default App;
