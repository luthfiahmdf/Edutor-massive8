import Navbar from '../../Components/Navbar';
import FooterComponent from '../../Components/Footer';

export const Home = () => {
  return (
    <>
      <div className="bg to-black min-h-screen">
        <Navbar />
        <div className="container mx-auto my-10">
          <div className="grid max-w-screen-xl mx-auto sm:max-w-xl md:max-w-5xl"></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
