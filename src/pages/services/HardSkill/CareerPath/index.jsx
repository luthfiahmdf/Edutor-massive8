import { Course } from "../../../../Components/Course";
import FooterComponent from "../../../../Components/Footer";
import Navbar from "../../../../Components/Navbar";
import course1 from "/image/course1.png";
import course2 from "/image/course2.png";
import course3 from "/image/course3.png";
import { FiFilter } from "react-icons/fi";
export const CareerPath = () => {
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
          <div className="text-slate-50 mt-[20vh] mb-10 gap-8 flex justify-center items-center flex-col w-[40%] text-center">
            <h1 className="text-[#FFB80F] text-4xl font-bold">
              Front-end Web Developer{" "}
            </h1>
            <p className="text-2xl font-bold">
              Up to date courses with interesting graphics to kickstart your
              fundamentals and accelerate your hard skills
            </p>
          </div>
          <div className="flex flex-row w-[60%] my-[5vh] gap-3">
            <form className="flex items-center w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative flex-1 items-center">
                <input
                  type="search"
                  role="search"
                  id="default-search"
                  className={`block w-full p-2 text-sm placeholder:text-center text-gray-900 rounded-lg bg-transparent border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            <button className="flex flex-row justify-center items-center gap-2">
              <p className="text-xl text-slate-50">Filter</p>
              <FiFilter className="text-2xl font-bold text-slate-50" />
            </button>
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
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
