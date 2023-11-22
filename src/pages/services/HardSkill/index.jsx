import FooterComponent from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import AccordionFlowbite from '../../../Components/Accordion';
import Card from '../../../Components/Card';
import CardSlider from '../../../Components/Swiper';

const cardData = [
  {
    title: 'FrontEnd Developer',
    imageUrl: '/public/image/card1.png',
    linkHref: '/path/to/page1',
  },
  {
    title: 'BackEnd Developer',
    imageUrl: '/public/image/card2.png',
    linkHref: '/path/to/page2',
  },
  {
    title: 'IOS Developer',
    imageUrl: '/public/image/card3.png',
    linkHref: '/path/to/page2',
  },
  {
    title: 'Android Developer',
    imageUrl: '/public/image/card4.png',
    linkHref: '/path/to/page3',
  },
  {
    title: 'Data Scients',
    imageUrl: '/public/image/card5.png',
    linkHref: '/path/to/page2',
  },
  {
    title: 'Data Enginer',
    imageUrl: '/public/image/card6.png',
    linkHref: '/path/to/page2',
  },
  {
    title: 'Data Analist',
    imageUrl: '/public/image/card7.png',
    linkHref: '/path/to/page2',
  },
  {
    title: 'UI/UX',
    imageUrl: '/public/image/card2.png',
    linkHref: '/path/to/page2',
  },
];
export const HardSkill = () => {
  return (
    <div className="bg-black min-h-screen ">
      <Navbar />
      <div className="container mx-auto my-10">
        <div className="grid max-w-screen-xl mx-auto gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className=" lg:col-span-3 xl:col-span-3 text-center mb-8" />
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="font-black text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <img src="/public/image/banner1.png" alt="edutorlogo" className="w-full h-auto rounded-md" />
            </div>
          </div>

          <div className="lg:col-span-3 xl:col-span-1">
            <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto">
              <h1 className="text-3xl font-bold text-gold">HARDSKILL</h1>
              <p className="mt-10 font-bold text-3xl lg:text-4xl xl:text-6xl">Kembangkan keterampilan Anda dengan kursus terkini</p>
              <p className="mt-10 font-bold text-3xl lg:text-4xl xl:text-3xl">Kursus terkini dengan grafik menarik untuk memulai dasar-dasar Anda dan mempercepat keterampilan keras Anda</p>
              <button type="button" className="mt-20 mx-20 text-black bg-gold hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-md text-lg px-6 py-3">
                <a href="/login">Daftar Sekarang</a>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40">
            <div className="">
              <h1 className="font-bold text-xl">Kenapa Memilih Edutor?</h1>
            </div>
          </div>

          <div className="lg:col-span-2 xl:col-span-2 grid gap-8 lg:grid-cols-1 xl:grid-cols-2 justify-between">
            <div className="">
              <AccordionFlowbite />
            </div>

            <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto">
              <img src="/public/image/banner2.png" className="rounded-md" alt="" />
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40">
            <div className="">
              <h1 className="font-bold text-xl mt-2">Carrer Path</h1>
              <div className="grid grid-cols-4 gap-8 justify-items-center mt-12">
                {cardData.map((card, index) => (
                  <Card key={index} title={card.title} imageUrl={card.imageUrl} linkHref={card.linkHref} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40">
            <h1 className="font-bold text-xl mt-2">Mentor</h1>
            <div className=" grid grid-cols-4 gap-8 justify-items-center mt-12"></div>
            <CardSlider cardData={cardData} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
