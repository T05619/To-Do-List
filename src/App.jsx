import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"
import ListRender from "./ListRender";
import InputAndAdd from "./InputAndAdd";

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState("");

  function changeTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      document.getElementById("themeButton").textContent = "Light Mode";
    } else {
      document.getElementById("themeButton").textContent = "Dark Mode";
    }
  }

  let themeButtonText = "";
  if (document.body.classList.contains("dark")) {
    themeButtonText = "Light Mode";
  } else {
    themeButtonText = "Dark Mode";
  }

  return (
    <div className="dark:bg-zinc-950 h-screen">
      <Routes>
        <Route
          path="/"
          element = {
            <>
              <h1 className="text-3xl mx-2 mb-3 pt-2 dark:text-white">To-Do List!</h1>
              <ListRender list={list} setList={setList} input={input} setInput={setInput}/>
              <InputAndAdd input={input} setInput={setInput} list={list} setList={setList}/>
              <button onClick={changeTheme} id="themeButton" className="duration-500 dark:text-white border-2 border-black dark:border-white rounded p-1 dark:hover:border-zinc-300 hover:border-zinc-600 absolute top-2 right-2">{themeButtonText}</button>
              <p className="fixed bottom-2 right-2 dark:text-white">Made by <a href="https://github.com/T05619" className="duration-500 hover:text-zinc-500 dark:hover:text-zinc-400" target="blank">T05619</a></p>
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
