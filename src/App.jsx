import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ABTestUrlSetup from './Pages/ABTestUrlSetup';
import { useState } from "react";
import ABTestGoal from "./Pages/ABTestGoal";



function App() {
  const [testname, setTestname] = useState("");
  const [testurl, setTesturl] = useState("");

  const handleCreate = (name, url) => {
    console.log("handleCreate called in App with:", name, url);
    setTestname(name);
    setTesturl(url);
  };


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard onCreate={handleCreate}/>}/>
        <Route path="/split-url/abtesturlsetup" element={<ABTestUrlSetup testname={testname} testurl={testurl} />}/>
        <Route path="/split-url/goal" element={<ABTestGoal/>}/>
      </Routes>
    </BrowserRouter>

    </div>
      


      
    
  );
}

export default App;