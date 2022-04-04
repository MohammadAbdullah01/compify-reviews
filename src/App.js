import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

function App() {
  // const data = [
  //   { id: 1, name: "Abdullah", opinion: "This is the first time I will be using an Apple computer. And I am amazed at the beautiful and sleek look of the product. I also love the Touch Bar. Definitely a good buy.", picture: "k", ratings: "5.0" },
  //   { id: 2, name: "Sindrella", opinion: "I bought this MacBook Pro because I am working on my MBA and I wanted a new MacBook Pro with great battery life and excellent quality fit and finish. I appreciate the fine things in life, and along with my other Apple products I was not disappointed. ", picture: "k", ratings: "4.9" },
  //   { id: 3, name: "Mustafiz", opinion: "The Retina display is absolutely stunning and easy on the eyes. Light, sleek design. Easy to connect all your devices and perfect for on the go use, as I bought it for college.", picture: "k", ratings: "4.5" },
  //   { id: 4, name: "Alisa", opinion: "The good thing about thiss product was that it was easy to ass emble and worked without and glitches its an apple cant go wrong", picture: "k", ratings: "5.0" },
  //   { id: 5, name: "Jack", opinion: "I recently started a business and this has everything I need and its really fast my favorite part on the Touch Bar", picture: "k", ratings: "4.2" },
  //   { id: 6, name: "Ilina", opinion: "I've used the laptop for a week and I am blown away. Performance, screen, battery life, and build quality are all exceptional. If you have never owned a MacBook and you're looking to jump in, now is the perfect time.", picture: "k", ratings: "4.7" }
  // ]
  // console.log(JSON.stringify(data))
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;


