import React  from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <Home />
      </div>
        <Footer/>
    </div>
  );
}

export default App;
