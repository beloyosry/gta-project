import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header.jsx";
import HomePhone from "./pages/Home system/Home phone/HomePhone";
import Calculator from "./pages/calculator/Calculator.jsx";
import HomeBar from "./components/ui/HomeBar/HomeBar.jsx";
import AppStore from "./pages/AppStore/AppStore.jsx";

function App ()
{
  return (
    <div className=" relative rounded-[50px] overflow-hidden p-3 border-[3px] border-gray-500 bg-black h-screen w-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePhone />
            </>
          }
        />
        <Route
          path="/calculator"
          element={
            <>
              <Header />
              <Calculator />
              <HomeBar />
            </>
          }
        />
        <Route
          path="/appstore"
          element={
            <>
              <Header />
              <AppStore />
              <HomeBar />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
