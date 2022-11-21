import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./Posts/Posts";
import Add from "./components/Add/Add";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
function App() {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
    setRefresh(false);
  }, [dispatch, refresh]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Posts/>}/>
          <Route path="/new" exact element={<Add/>}/>
          <Route path="/selected/:id" exact element={<Details/>}/>
          <Route path="/edit/:id"  element={<Edit ref={setRefresh}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
