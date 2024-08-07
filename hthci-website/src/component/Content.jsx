import React from "react";
import {  Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import AfterSchool from "./pages/AfterSchool";
import Scholarships from "./pages/Scholarships";
import PublicHealth from "./pages/PublicHealth";
import HumanDev from "./pages/HumanDev";
import NatureBasedSo from "./pages/NatureBasedSo";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import GetInvolved from "./pages/GetInvolved";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";



const Content = (props) => ( 
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects/after-school" element={<AfterSchool />}></Route>
            <Route path="/projects/scholarships" element={<Scholarships/>}></Route>
            <Route path="/projects/public-health" element={<PublicHealth/>}></Route> 
            <Route path="/projects/human-development" element={<HumanDev/>}></Route> 
            <Route path="/projects/nature-based-solutions" element={<NatureBasedSo/>}></Route> 
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/get-involved" element={<GetInvolved />}></Route>
            <Route path="/thank-you" element={<ThankYou />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </main>
);

export default Content;


