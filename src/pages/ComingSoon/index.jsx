import FooterComponent from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export const ComingSoon = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="flex flex-col justify-center items-center">
        <div className="text-slate-50 mt-[10vh] mb-5 gap-8 flex justify-center items-center flex-col w-[40%] text-center">
            <h1 className="text-[#FFB80F] text-7xl font-bold mt-60">Comming Soon </h1>
        </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

