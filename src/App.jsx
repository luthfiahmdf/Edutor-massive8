import { Footer } from 'flowbite-react';
import Navbar from './Components/Navbar';
import FooterComponent from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow">
        {/* Konten aplikasi Anda akan ditambahkan di sini */}
        {/* Misalnya, Anda bisa membuat komponen-komponen atau menampilkan konten lainnya */}
      </div>
      <div className="">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
