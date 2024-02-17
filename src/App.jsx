import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header.jsx";
import HomePhone from "./pages/Home system/Home phone/HomePhone";
import HomeBar from "./components/ui/HomeBar/HomeBar.jsx";
import NewCalculator from "./pages/calculator/newCalculator.jsx";
import AppStore from "./pages/AppStore/AppStore.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Folder from "./pages/Home system/Folder/Folder.jsx";
import Battery from "./pages/Home system/Battery/Battery.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className=" relative rounded-[50px] overflow-hidden p-3 border-[3px] border-gray-500 bg-black h-screen w-screen">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
                <NewCalculator />
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
          <Route
            path="/contacts"
            element={
              <>
                <Header />
                <Contacts />
                <HomeBar />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Header />
                <Gallery />
                <HomeBar />
              </>
            }
          />
          <Route
            path="/folder"
            element={
              <>
                <Folder />
              </>
            }
          />
          <Route
            path="/battery"
            element={
              <>
                <Battery />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
