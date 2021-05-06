import './App.css'
import React, { Component } from 'react';
import {ProfilePhoto} from './component/profile/profilephoto';
import {Full} from './component/profile/fullname';
import {Add} from './component/profile/adress';

function App() {
  return (
    <div className="App">
        <ProfilePhoto />
        <Full />
        <Add />
        <footer>Think you Copyright (C) Microsoft Corporation. Tous droits réservés.</footer>
    </div>
  );
}

export default App;