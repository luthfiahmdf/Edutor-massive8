import { Carousel } from 'flowbite-react';
import Card from '../../../../Components/Card';
import FooterComponent from '../../../../Components/Footer';
import Navbar from '../../../../Components/Navbar';

export const DetailMentors = () => {
  const cardData = [
    {
      title: 'React',
      imageUrl: '/public/image/card1.png',
      linkHref: '/services/hardskill/careerpath',
    },
    {
      title: 'Javascript',
      imageUrl: '/public/image/card2.png',
      linkHref: '/services/hardskill/careerpath',
    },
    {
      title: 'Javascript',
      imageUrl: '/public/image/card2.png',
      linkHref: '/services/hardskill/careerpath',
    },
    {
      title: 'Python',
      imageUrl: '/public/image/card3.png',
      linkHref: '/services/hardskill/careerpath',
    },
  ];
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="container mx-auto my-10 mt-20 ">
          <div className="grid max-h-screen-md mx-auto lg:grid-cols-2 xl:grid-cols-2 ">
            <div className="xl:col-span-1 mt-20 flex justify-center ">
              <img src="/public/image/mentor.png" alt="edutorlogo" className="rounded-md" />
            </div>
            <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto mt-40">
              <h1 className="mt-10 text-4xl font-bold lg:text-4xl xl:text-6xl text-gold">Jesslyn Leon</h1>
              <br />
              <p className="mt-10 text-lg lg:text-xl xl:text-2xl">Jesslyn Leon works at one of the big tech companies, focusing in back end development and is an excellent tutor</p>
              <br />
              <p className="mt-10 text-lg lg:text-xl xl:text-2xl">Degree: Computer Science in X University Experience: Internship at Google, Project Manager in X Project Courses: Python, Java Script, React</p>
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40">
            <div className="mb-6">
              <h1 className="font-bold text-3xl">Experience</h1>
            </div>
          </div>
          <div className="grid max-h-screen-md mx-auto gap-8 lg:grid-cols-2 xl:grid-cols-2">
            <div className="xl:col-span-1 mt-20 gap-8 flex justify-center">
              <img src="/public/image/p.png" alt="edutorlogo" className="rounded-md" />
            </div>
            <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto mt-40">
              <h1 className="mt-10 text-3xl font-bold lg:text-3xl xl:text-4xl">Individual Mentoring</h1>
              <hr className=" border-white my-8 w-12 -mt-6 -ml-12" />
              <br />
              <p className="mt-6 text-lg lg:text-xl xl:text-2xl">Jesslyn has succeeded in mentoring a student from Edutor to become a back-end developer in Facebook.</p>
            </div>
          </div>
          <div className="grid max-h-screen-md mx-auto gap-8 lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto mt-40">
              <h1 className="mt-10 text-3xl font-bold lg:text-3xl xl:text-4xl">Project Manger</h1>
              <br />
              <p className="mt-6 text-lg lg:text-xl xl:text-2xl">Jesslyn has succeeded in managing a project that resulted in good and excellent performance from their team.</p>
            </div>
            <div className="xl:col-span-1 mt-20 gap-8 flex justify-center">
              <img src="/public/image/b.png" alt="edutorlogo" className="rounded-md" />
            </div>
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-40 mb-40">
            <h1 className="font-bold text-3xl mt-7">Course</h1>
            <div className="grid grid-cols-4 justify-items-center mt-20">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} imageUrl={card.imageUrl} linkHref={card.linkHref} />
              ))}
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
