import { FaArrowRight } from 'react-icons/fa';
import Accordion from '../../../../Components/Accordion';
import FooterComponent from '../../../../Components/Footer';
import Navbar from '../../../../Components/Navbar';
import FormQuestion from '../../../../Components/FormQuestion';

const dataAccordion = [
  {
    id: 1,
    title: 'Part 1 (Introduction to Leadership)',
    desc: 'desc 1',
  },
  {
    id: 2,
    title: 'Part 2 (Basic Leadership)',
    desc: 'desc 2',
  },
  {
    id: 3,
    title: 'Part 3 (Basic How to Lead)',
    desc: 'desc 3',
  },
];

export const EnrollSoft = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="container mx-auto my-10">
          <div className="grid max-w-screen-xl mx-auto sm:max-w-xl md:max-w-5xl mt-20">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe title="YouTube Video" className="absolute inset-0 w-full h-full object-cover mt-10 rounded-md" src="https://www.youtube.com/embed/SMS-QPw1DFY" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-16">
            <h1 className="font-bold text-3xl">Leadership when you are the youngest there</h1>
            <p className="font-bold text-2xl">Part 1 (Introduction to Leadership) 1/10 </p>
          </div>
          <div className="lg:col-span-1 xl:col-span-2  text-white mt-20">
            <h1 className="font-bold text-3xl text-center">Courses</h1>
            <p className="text-right mt-4 text-1xl font-semibold mb-6">0% Compeleted</p>
            <div className="w-full">
            <Accordion allData={dataAccordion} />
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
