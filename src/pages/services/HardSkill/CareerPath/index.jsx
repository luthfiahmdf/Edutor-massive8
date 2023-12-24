import Card from "../../../../Components/Card";
import { Course } from "../../../../Components/Course";
import FooterComponent from "../../../../Components/Footer";
import Navbar from "../../../../Components/Navbar";
import course1 from "../../../../assets/image/course1.png";
import course2 from "../../../../assets/image/course2.png";
import course3 from "../../../../assets/image/course3.png";

export const CareerPath = () => {
  const cardData = [
    {
      title: "Back-End Developer",
      imageUrl: "/public/image/card1.png",
      linkHref: "/services/hardskill/careerpath",
    },
    {
      title: "iOS Developer",
      imageUrl: "/public/image/card2.png",
      linkHref: "/services/hardskill/careerpath",
    },
    {
      title: "Android Developer",
      imageUrl: "/public/image/card3.png",
      linkHref: "/services/hardskill/careerpath",
    },
    {
      title: "Data Engineer",
      imageUrl: "/public/image/card4.png",
      linkHref: "/services/hardskill/careerpath",
    },
  ];

  const data = [
    {
      image: `${course1}`,
      id: 1,
      title: "Complete Basic Coding for Beginner",
      description:
        "Learn how to code from scratch with me: step by step coding course",
      mentor: "Jesslyn Leon",
      rating: "4.5",
      time: "16",
      video: "50",
    },
    {
      image: `${course2}`,
      id: 2,
      title: "Complete Basic Front-End Developer: Learn CSS & JS",
      description:
        "Learn basic front-end developer language with easy to understand course",
      mentor: "Christina Field",
      rating: "4.0",
      time: "34",
      video: "135",
    },
    {
      id: 3,
      image: `${course3}`,
      title: "Learn Intermediate Front-End Developer Code",
      description:
        "The ultimate intermediate front-end developer coding course for job hunters and student.",
      mentor: "Christina Field",
      rating: "4.6",
      time: "54",
      video: "258",
    },
  ];
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <div className="text-slate-50 mt-[10vh] mb-20 gap-8 flex justify-center items-center flex-col w-[40%] text-center">
            <h1 className="text-[#FFB80F] text-4xl font-bold mt-16">
              Front-end Web Developer{" "}
            </h1>
            <p className="text-2xl font-bold">
              Up to date courses with interesting graphics to kickstart your
              fundamentals and accelerate your hard skills
            </p>
          </div>

          <div className="flex flex-col gap-y-8">
            {data.map((item, idx) => (
              <Course
                key={idx}
                title={item.title}
                description={item.description}
                image={item.image}
                mentor={item.mentor}
                rating={item.rating}
                time={item.time}
                video={item.video}
                id={item.id}
              />
            ))}
          </div>
          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-16 mb-40">
            <h1 className="font-bold text-3xl mt-7">Other Carrer Path</h1>
            <div className="grid grid-cols-4 gap-8 justify-items-center mt-12">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  imageUrl={card.imageUrl}
                  linkHref={card.linkHref}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
