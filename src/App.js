import React, { useState, createContext } from "react";
import AddItemList from "./components/AddItemForm";
import ComponentList from "./components/ComponentsList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from "./components/signin";
import Protected from "./components/Protected";
import Signout from "./components/Signout";
import Edittab from "./components/edittab";

export const Context = createContext();

function App() {
  const [items, setItems] = useState({
    xxxcdrypud: "Breakfast",
    dfqogmudfe: "work",
    dferikdcbut: "cricket",
  });

  const [flag, setflag] = useState(false);

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        flag,
        setflag,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Signin />}>
            {" "}
          </Route>
          <Route
            path="/todo"
            element={
              <Protected>
                <Signout />
                <AddItemList />

                <ComponentList items={items} />
              </Protected>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
