import FooterComponent from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import AccordionFlowbite from '../../../Components/Accordion';
import Card from '../../../Components/Card';
import CardSlider from '../../../Components/Swiper';
import { Link } from 'react-router-dom';

const cardData = [
  {
    title: 'FrontEnd Developer',
    imageUrl: '/public/image/card1.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'BackEnd Developer',
    imageUrl: '/public/image/card2.png',
    linkHref: '/comingsoon',
  },
  {
    title: 'IOS Developer',
    imageUrl: '/public/image/card3.png',
    linkHref: '/comingsoon',
  },
  {
    title: 'Android Developer',
    imageUrl: '/public/image/card4.png',
    linkHref: '/comingsoon',
  },
  {
    title: 'Data Scients',
    imageUrl: '/public/image/card5.png',
    linkHref: '/comingsoon',
  },
  {
    title: 'Data Enginer',
    imageUrl: '/public/image/card6.png',
    linkHref: '/comingsoon',
  },
  {
    title: 'Data Analist',
    imageUrl: '/public/image/card7.png',
    linkHref: '/comingsoon',
  },
  {
    title: 'UI/UX',
    imageUrl: '/public/image/card2.png',
    linkHref: '/service/hardskill/careerpath3',
  },
];

const dataAccordion = [
  {
    id: 1,
    title: "Up to date curriculum",
    desc: "Up to date courses with interesting graphics to kickstart your fundamentals and accelerate your hard skills.",
  },
  {
    id: 2,
    title: "Professional Mentors",
    desc: "Trusted professional mentors with real skill and experience to teach you.",
  },
  {
    id: 3,
    title: "Individual Mentoring",
    desc: "Passionate mentors lending a hand in 1-1 individual mentoring to help you with your personal work.",
  },
]
export const HardSkill = () => {
  return (
    <div className="bg-black min-h-screen shadow-md ">
      <Navbar />
      <div className="container mx-auto my-10 mt-16">
        <div className="grid max-w-screen-xl mx-auto gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="lg:col-span-1 xl:col-span-1 mt-16">
            <img src="/public/image/banner1.png" alt="edutorlogo" className="rounded-md" />
          </div>

          <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto mt-16">
            <h1 className="text-3xl font-bold text-gold">Hard Skills</h1>
            <p className="mt-10 text-4xl font-bold lg:text-4xl xl:text-6xl">Grow your skills with up to date courses</p>
            <p className="mt-10 text-lg lg:text-xl xl:text-2xl">Up to date courses with interesting graphics to kickstart your fundamentals and accelerate your hard skills</p>

            <button type="button" className="mt-20 text-white border border-white  hover:text-black  hover:bg-gold  focus:ring-white font-medium rounded-md text-lg px-6 py-3 self-start">
              <Link to="/service/hardskill/careerpath2">Enroll Now</Link>
            </button>
          </div>

          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40">
            <div className="mb-6">
              <h1 className="font-bold text-3xl">Why Choose Edutor?</h1>
            </div>
          </div>

          <div className="lg:col-span-2 xl:col-span-2 grid gap-8 lg:grid-cols-2 xl:grid-cols-2 justify-between">
            <div className="">
              <AccordionFlowbite allData={dataAccordion} />
            </div>

            <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto">
              <img src="/public/image/banner2.png" className="rounded-md" alt="" />
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-16">
            <h1 className="font-bold text-3xl mt-7">Carrer Path</h1>
            <div className="grid grid-cols-4 gap-8 justify-items-center mt-12">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} imageUrl={card.imageUrl} linkHref={card.linkHref} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-16">
            <h1 className="font-bold text-3xl">Mentor</h1>
            <div className="mt-12 mb-40">
              <CardSlider cardData={cardData} />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
