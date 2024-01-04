import './App.css';
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center text-3xl font-bold">stylöKart</h1>
      <img src="/assets/offer.png" alt="" className="mt-20 w-full" />
      <div className="flex justify-center ">
        <img
          src="/assets/banner.jpeg"
          alt=""
          className="w-3/4 py-4 px-3 transition ease-in-out delay-150  hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-3xl"
        />
      </div>
    
    </div>
  );
}

export default App;
