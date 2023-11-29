import { FaArrowRight } from 'react-icons/fa';
import Accordion from '../../../../Components/Accordion';
import FooterComponent from '../../../../Components/Footer';
import Navbar from '../../../../Components/Navbar';
import FormQuestion from '../../../../Components/FormQuestion';

export const Enroll = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="container mx-auto my-10">
          <div className="grid max-w-screen-xl mx-auto sm:max-w-xl md:max-w-5xl mt-40">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe title="YouTube Video" className="absolute inset-0 w-full h-full object-cover rounded-md" src="https://www.youtube.com/embed/tZV_Ax9TyUY" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40">
            <h1 className="font-bold text-3xl">Complete Basic Coding For Beginner</h1>
            <p className="font-bold text-2xl">Part 1 ( Introduction to code ) </p>
          </div>
          <div className="lg:col-span-1 xl:col-span-2  text-white mt-20">
            <h1 className="font-bold text-3xl text-center">Courses</h1>
            <p className="text-right mt-4 text-1xl font-semibold mb-6">0% Compeleted</p>
            <div className="w-full">
              <Accordion />
            </div>
            <p className="text-right  mt-4 cursor-pointer">
              <a href="/" className="underline">
                See More <FaArrowRight className="inline-block ml-2" />
              </a>
            </p>
          </div>
          <div className=" text-white mt-20">
            <h1 className="font-bold text-3xl text-centert">Having trouble understanding ?</h1>
            <p className="mt-6">Contact the mentor right away via chat</p>
          </div>
          <FormQuestion />
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
