import Navbar from '../../../../Components/Navbar';
import FooterComponent from '../../../../Components/Footer';

export const Leadership = () => {
  const divStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'left',
    backgroundColor: '#111', // Background color for the hero section
  };

  return (
    <>
      <Navbar />
      <div style={divStyle}>
        <div className="container mx-auto mt-16 flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold">Leadership when you are the youngest there</h1>
            <span className="text-white text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1.8k reviews) 8,000 student</span>
            <h1 className="text-2xl font-bold">
              <span style={{ color: 'white' }}>&#x25A0; Course by</span>
              <span style={{ color: '#D97706' }}> Hans Leon</span>
            </h1>
            <br />
            <h2 className="text-1xl font-bold">About</h2>
            <br />
            <h2 className="text-1xl">Sometimes it is challenging to lead within a group of seniors or</h2>
            <h2 className="text-1xl">older people. In this course, Hans Leon will teach you how to </h2>
            <h2 className="text-1xl">develop strong leadership and how to manage seniority issues in </h2>
            <h2 className="text-1xl">gatherings. </h2>
          </div>
          <div className="w-1/2">
            <img src="/public/image/leadership.png" alt="Leadership Image" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/*new section */}
      <div className="bg-black py-24 sm:py-12">
        <div className="container mx-auto mt-16 grid grid-cols-2 gap-16 relative">
          <div className="bg-black border border-white font-semibold text-white py-4 px-8 rounded">
            {/* Content for the first box */}
            <br />
            <h2 className="text-xl font-bold text-center mb-4">Course Takeaways</h2>
            <br />
            <br />
            <p className="text-sm pl-12">&#8226; How to leverage strengths</p>
            <br />
            <p className="text-sm pl-12">&#8226; New leadership competences</p>
            <br />
            <p className="text-sm pl-12">&#8226; Build better relationships</p>
            <br />
            <p className="text-sm pl-12">&#8226; How to lead by example</p>
            <br />
            <p className="text-sm pl-12">&#8226; How to communicate effectively</p>
            <br />
            <p className="text-sm pl-12">&#8226; Embrace elderlies’ feedback</p>
            <br />
          </div>
          <div className="bg-black border border-white font-semibold text-white py-4 px-8 rounded">
            {/* Content for the second box */}
            <br />
            <h2 className="text-xl font-bold text-center mb-4">Course Specification</h2>
            <br />
            <br />
            <p className="text-sm pl-12">&#8226; Duration = 50:43 minutes</p>
            <br />
            <p className="text-sm pl-12">&#8226; 7 Articles by tutor</p>
            <br />
            <p className="text-sm pl-12">&#8226; 5 downloadable resources</p>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 bg-white w-px h-full"></div>
        </div>
      </div>

      {/* New Team Section */}
      <div className="bg-black py-24 sm:py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Reviews</h2>
          <div className="grid grid-cols-3 gap-8 justify-items-center mt-16">
            {/* Team Member 1 */}
            <div className="flex items-center border border-white py-1 px-15">
              <div className="ml-4 p-5">
                <h3 className="text-xl font-bold text-white">Tiara Hopkins</h3>
                <span className="text-white text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734;</span>
                <p className="text-sm text-white">This course is good and very helpful. I</p>
                <p className="text-sm text-white">like the teaching style, it suits me very</p>
                <p className="text-sm text-white">much.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex items-center border border-white py-1 px-15">
              <div className="ml-4 p-5">
                <h3 className="text-xl font-bold text-white">Tiara Hopkins</h3>
                <span className="text-white text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734;</span>
                <p className="text-sm text-white">This course is good and very helpful. I</p>
                <p className="text-sm text-white">like the teaching style, it suits me very</p>
                <p className="text-sm text-white">much.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex items-center border border-white py-1 px-15">
              <div className="ml-4 p-5">
                <h3 className="text-xl font-bold text-white">Tiara Hopkins</h3>
                <span className="text-white text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734;</span>
                <p className="text-sm text-white">This course is good and very helpful. I</p>
                <p className="text-sm text-white">like the teaching style, it suits me very</p>
                <p className="text-sm text-white">much.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Team Section */}
      <div className="bg-black py-24 sm:py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">About Mentor</h2>
          <div className="grid gap-8 justify-items-center mt-16">
            {/* Team Member 1 */}
            <div className="flex items-center py-1 px-15">
              <img src="/public/image/ment1.png" alt="Team Member 1" className="rounded-full w-40 h-40 object-cover mb-10 ml-20" />
              <div className="ml-4 p-5">
                <h3 className="text-xl pl-20 font-bold text-gold">John Doe</h3>
                <br />
                <p className="text-sm pl-20 text-white">
                  John Doe is a successful professional mentor in Harvard University teaching management classes. Hans Leon has created lots of courses with us and has helped students handle their soft skills.{' '}
                </p>
                <br />
                <p className="text-sm pl-20 text-white">&#8226; 4.5 Instructor Rating</p>
                <br />
                <p className="text-sm pl-20 text-white">&#8226; Has over 80 courses</p>
                <br />
                <p className="text-sm pl-20 text-white">&#8226; Has over 9,000 students</p>
              </div>
            </div>
          </div>
          <hr className="w-full border-t-2 border-white mt-2" />
        </div>
      </div>

      {/* New Team Section */}
      <div className="bg-black py-24 sm:py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-left text-white">Similiar Study</h2>
          <div className="grid grid-cols-4 gap-8 justify-items-center mt-16">
            {/* Team Member 1 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/banner2.png" alt="Team Member 1" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Leadership when you are the youngest there</h3>
              <p className="text-xs">Hans Leon</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 2 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/banner2.png" alt="Team Member 2" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Leadership when you are the youngest there</h3>
              <p className="text-xs">Hans Leon</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 3 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/banner2.png" alt="Team Member 3" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Leadership when you are the youngest there</h3>
              <p className="text-xs">Hans Leon</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 4 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/banner2.png" alt="Team Member 4" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Leadership when you are the youngest there</h3>
              <p className="text-xs">Hans Leon</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>
          </div>
          <div className="mt-10 text-white text-left">
            <a href="#" className="inline-block bg-black border border-white font-semibold text-white py-2 px-8 rounded hover:text-gold w-auto mb-16">
              Back
            </a>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
