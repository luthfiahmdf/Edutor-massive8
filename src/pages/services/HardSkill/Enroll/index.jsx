import Accordion from "../../../../Components/Accordion";
import FooterComponent from "../../../../Components/Footer";
import Navbar from "../../../../Components/Navbar";

export const Enroll = () => {
  const data = [
    {
      title: "Test1",
      detail: "jeijeijeijeiej",
      id: 1,
    },
    {
      title: "Test1",
      detail: "jeijeijeijeiej",
      id: 2,
    },
    {
      title: "Test1",
      detail: "jeijeijeijeiej",
      id: 3,
    },
  ];
  console.log(data);
  return (
    <>
      <div className="bg-black min-h-screen ">
        <div className="container mx-auto my-10">
          <Navbar />
          <div className="grid max-w-screen-xl  mx-auto gap-8 lg:grid-cols-2 xl:grid-cols-2 items-center">
            <div className="lg:col-span-1 xl:col-span-1 mt-[10vh]">
              <div
                className="relative w-full h-0"
                style={{ paddingBottom: "56.25%" }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                  controls
                >
                  <source src="/path/to/your/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="lg:col-span-1 xl:col-span-1 mt-16">
              <div className="text-white text-start text-lg lg:text-xl xl:text-3xl gap-2 col-auto">
                <h1 className="text-3xl font-bold text-white">
                  Complete Basic Coding for Beginner
                </h1>
                <p className="mt-5 text-2xl">
                  Learn how to code from scratch with me: step by step coding
                  course
                </p>
                <p className="mt-10 text-1xl">Jesslyn Leon</p>
                <span className="text-white text-1x1">
                  4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (100)
                </span>
                <p className="text-1x1">16 Hours - 50+ Lecture</p>
              </div>
              <div className="mt-5">
                <a
                  href="#"
                  className="inline-block border border-white font-semibold text-white py-1 px-2 rounded block hover:text-gold w-auto"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>

          {/*new section */}
          <div className="bg-black py-24 sm:py-12">
            <div className="container mx-auto mt-16 grid grid-cols-2 gap-16 relative">
              <div className="bg-black border border-white font-semibold text-white py-4 px-8 rounded">
                {/* Content for the first box */}
                <br />
                <h2 className="text-xl font-bold text-center mb-4">
                  Course Takeaways
                </h2>
                <br />
                <br />
                <p className="text-sm pl-12">&#8226; How to code</p>
                <br />
                <p className="text-sm pl-12">
                  &#8226; Learn the basic of coding
                </p>
                <br />
                <p className="text-sm pl-12">&#8226; Build your own website</p>
                <br />
                <p className="text-sm pl-12">&#8226; Know more about code</p>
                <br />
                <p className="text-sm pl-12">&#8226; How to code effectively</p>
                <br />
              </div>
              <div className="bg-black border border-white font-semibold text-white py-4 px-8 rounded">
                {/* Content for the second box */}
                <br />
                <h2 className="text-xl font-bold text-center mb-4">
                  Course Specification
                </h2>
                <br />
                <br />
                <p className="text-sm pl-12">
                  &#8226; 16 Hours and 50+ Lecture
                </p>
                <br />
                <p className="text-sm pl-12">&#8226; Fulltime Access</p>
                <br />
                <p className="text-sm pl-12">
                  &#8226; 5 downloadable resources
                </p>
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 bg-white w-px h-full"></div>
            </div>
          </div>

          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-16">
            <div className="">
              <h1 className="text-4xl font-bold mb-8 text-center text-white">
                Courses
              </h1>
              <br />
              <br />
              <h1 className="text-left text-xl">
                10 section - 54 Lecture - 16 hours{" "}
              </h1>
              <br />
            </div>
          </div>

          <div className="w-full">
            <Accordion />;
          </div>

          {/* New Team Section */}
          <div className="bg-black py-24 sm:py-12">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">
                Reviews
              </h2>
              <div className="grid grid-cols-3 gap-8 justify-items-center mt-16">
                {/* Team Member 1 */}
                <div className="flex items-center border border-white py-1 px-15">
                  <div className="ml-4 p-5">
                    <h3 className="text-xl font-bold text-white">
                      Tiara Hopkins
                    </h3>
                    <span className="text-white text-xs">
                      4,5 &#9733; &#9733; &#9733; &#9733; &#9734;
                    </span>
                    <p className="text-sm text-white">
                      This course is good and very helpful. I
                    </p>
                    <p className="text-sm text-white">
                      like the teaching style, it suits me very
                    </p>
                    <p className="text-sm text-white">much.</p>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex items-center border border-white py-1 px-15">
                  <div className="ml-4 p-5">
                    <h3 className="text-xl font-bold text-white">
                      Tiara Hopkins
                    </h3>
                    <span className="text-white text-xs">
                      4,5 &#9733; &#9733; &#9733; &#9733; &#9734;
                    </span>
                    <p className="text-sm text-white">
                      This course is good and very helpful. I
                    </p>
                    <p className="text-sm text-white">
                      like the teaching style, it suits me very
                    </p>
                    <p className="text-sm text-white">much.</p>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="flex items-center border border-white py-1 px-15">
                  <div className="ml-4 p-5">
                    <h3 className="text-xl font-bold text-white">
                      Tiara Hopkins
                    </h3>
                    <span className="text-white text-xs">
                      4,5 &#9733; &#9733; &#9733; &#9733; &#9734;
                    </span>
                    <p className="text-sm text-white">
                      This course is good and very helpful. I
                    </p>
                    <p className="text-sm text-white">
                      like the teaching style, it suits me very
                    </p>
                    <p className="text-sm text-white">much.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* New Team Section */}
          <div className="bg-black py-24 sm:py-12">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">
                About Mentor
              </h2>
              <div className="grid gap-8 justify-items-center mt-16">
                {/* Team Member 1 */}
                <div className="flex items-center py-1 px-15">
                  <img
                    src="/public/image/ment1.png"
                    alt="Team Member 1"
                    className="rounded-full w-40 h-40 object-cover mb-10 ml-20"
                  />
                  <div className="ml-4 p-5">
                    <h3 className="text-xl pl-20 font-bold text-gold">
                      John Doe
                    </h3>
                    <br />
                    <p className="text-sm pl-20 text-white">
                      John Doe is a successful professional mentor in Harvard
                      University teaching management classes. Hans Leon has
                      created lots of courses with us and has helped students
                      handle their soft skills.{" "}
                    </p>
                    <br />
                    <p className="text-sm pl-20 text-white">
                      &#8226; 4.5 Instructor Rating
                    </p>
                    <br />
                    <p className="text-sm pl-20 text-white">
                      &#8226; Has over 80 courses
                    </p>
                    <br />
                    <p className="text-sm pl-20 text-white">
                      &#8226; Has over 9,000 students
                    </p>
                  </div>
                </div>
              </div>
              <hr className="w-full border-t-2 border-white mt-2" />
            </div>
          </div>
          {/* New Team Section */}
          <div className="bg-black py-24 sm:py-12">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-left text-white">
                Other Course
              </h2>
              <div className="grid grid-cols-4 gap-8 justify-items-center mt-16">
                {/* Team Member 1 */}
                <a
                  href="/public/image/ment1.png"
                  className="bg-gray-300 flex flex-col items-right justify-start border border-black text-black py-2 px-10 hover:bg-gray-500"
                >
                  <img
                    src="/public/image/banner2.png"
                    alt="Team Member 1"
                    className="w-full h-full object-contain"
                  />
                  <br />
                  <hr className="w-full border-t-2 border-black mb-2" />
                  <span className="text-black text-xs">
                    4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)
                  </span>
                  <h3 className="text-sm font-bold">Master Python</h3>
                  <p className="mt-5 text-xs">Hans Leon</p>
                  <hr className="w-full border-t-2 border-black mt-2" />
                </a>

                {/* Team Member 2 */}
                <a
                  href="/public/image/card1.png"
                  className="bg-gray-300 flex flex-col items-right justify-start border border-black text-black py-2 px-10 hover:bg-gray-500"
                >
                  <img
                    src="/public/image/banner2.png"
                    alt="Team Member 2"
                    className="w-full h-full object-contain"
                  />
                  <br />
                  <hr className="w-full border-t-2 border-black mb-2" />
                  <span className="text-black text-xs">
                    4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)
                  </span>
                  <h3 className="text-sm font-bold">
                    Fundamentals of Data Science
                  </h3>
                  <p className="text-xs">Hans Leon</p>
                  <hr className="w-full border-t-2 border-black mt-2" />
                </a>

                {/* Team Member 3 */}
                <a
                  href="#"
                  className="bg-gray-300 flex flex-col items-right justify-start border border-black text-black py-2 px-10 hover:bg-gray-500"
                >
                  <img
                    src="/public/image/banner2.png"
                    alt="Team Member 3"
                    className="w-full h-full object-contain"
                  />
                  <br />
                  <hr className="w-full border-t-2 border-black mb-2" />
                  <span className="text-black text-xs">
                    4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)
                  </span>
                  <h3 className="text-sm font-bold">
                    Basic Java Script Programming
                  </h3>
                  <p className="text-xs">Hans Leon</p>
                  <hr className="w-full border-t-2 border-black mt-2" />
                </a>

                {/* Team Member 4 */}
                <a
                  href="#"
                  className="bg-gray-300 flex flex-col items-right justify-start border border-black text-black py-2 px-10 hover:bg-gray-500"
                >
                  <img
                    src="/public/image/banner2.png"
                    alt="Team Member 4"
                    className="w-full h-full object-contain"
                  />
                  <br />
                  <hr className="w-full border-t-2 border-black mb-2" />
                  <span className="text-black text-xs">
                    4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)
                  </span>
                  <h3 className="text-sm font-bold">
                    Fundamentals of Android Studio
                  </h3>
                  <p className="text-xs">Hans Leon</p>
                  <hr className="w-full border-t-2 border-black mt-2" />
                </a>
              </div>
              <div className="mt-10 text-white text-left">
                <a
                  href="#"
                  className="inline-block bg-black border border-white font-semibold text-white py-2 px-8 rounded block hover:text-gold w-auto"
                >
                  Back
                </a>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
