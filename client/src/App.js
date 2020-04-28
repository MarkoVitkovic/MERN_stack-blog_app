import React, {useState, useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Articles from './components/Articles'
import axios from 'axios';

function App() {
  const {posts, setPosts} = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(res => setPosts(res))
      .catch(err => console.log(err));
  },[])

  return (
    <div>
      <Header/>
      <Navbar/>
      <Route to="/" render={() => <Articles posts={posts}/>}/>
      <Footer/>
    </div>
  );
}

export default App;
