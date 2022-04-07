import React, { Component } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import Fragment from "./Fragment";
import Props from './Props'
import Asyncreq from "./Asyncreq"
import State from "./State"
import Coomponent from "./Coomponent"
import Keys from "./Keys"
import Lifecycle from "./Lifecycle"
import Reactmemo from "./Reactmemo"
import Refs from "./Refs"
import Router from "./Router"
import Useeffect from "./Useeffect"
import VirtualDOM from "./VirtualDOM"
import Form from "./Form";
import Events from "./Events";
import Context from "./Context";
import Main from "./Main";




const Page =()=>{
return( 
<div className="page">
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/fragment" element={<Fragment/>}/>
        <Route path="/props" element={<Props/>}/>
        <Route path="/asynchronousrequests" element={<Asyncreq/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/component" element={<Coomponent/>}/>
        <Route path="/keys" element={<Keys/>}/>
        <Route path="/lifecycle" element={<Lifecycle/>}/>
        <Route path="/reactmemo" element={<Reactmemo/>}/>
        <Route path="/refs" element={<Refs/>}/>
        <Route path="/router" element={<Router/>}/>
        <Route path="/useeffect" element={<Useeffect/>}/>
        <Route path="/virtualdom" element={<VirtualDOM/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/context" element={<Context/>}/>
        </Routes>
</div>

)}


export {Page};