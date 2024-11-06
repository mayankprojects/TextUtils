import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [state, setState] = useState(null);

  const showState = (type, message) => {
    setState({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setState(null);
    }, 2000);
  };

  // const [color, setColor] = useState("light");

  //   const checkColor = (col) => {
  //     if(color != col)
  //     setColor("col");
  //   }

  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showState("success", "Light mode is on");
      // document.title = 'TextUtils - Light Mode';
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#383948";
      showState("success", "Dark mode is on");
      // document.title = 'TextUtils - Dark Mode';
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar title="TextUtils" toggleMode={toggle} mode={mode} />
          <Alert alert={state} />

          <TextForm
            button="Convert to Uppercase"
            mode={mode}
            showState={showState}
          />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar title="TextUtils" toggleMode={toggle} mode={mode} />
          <Alert alert={state} />
          <About mode = {mode}/>
        </>
      ),
    },
  ]);

  return (
    <>

      <RouterProvider router={router} />
      {/* <Navbar title="TextUtils" toggleMode={toggle} mode={mode} />
      <Alert alert={state} />

      <TextForm
        button="Convert to Uppercase"
        mode={mode}
        showState={showState}
      /> */}
    </>
  );
}

export default App;