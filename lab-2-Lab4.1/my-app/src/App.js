
//This imports all the contet from the components folder and the routor 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';

// main part of the app 
function App() {
  //this is where the conent is displayed 
    //also added the nav bar to the code with the routes been changed too
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} /> 
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
}
//ends with it been exportred
export default App;

