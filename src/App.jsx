import Navbar from './Components/Navbar';
import FooterComponent from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow"></div>
      <div className="">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
