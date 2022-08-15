import "./Content.css";
import React from "react";
import {  Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import GetInvolved from "./pages/GetInvolved";
import ThankYou from "./pages/ThankYou";


const Content = (props) => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/get-involved" element={<GetInvolved />}></Route>
            <Route path="/thank-you" element={<ThankYou />}></Route>
        </Routes>
    </main>
);

export default Content;


