import FooterComponent from '../../../../Components/Footer';
import Navbar from '../../../../Components/Navbar';

export const Popular = () => {
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
        <div className="container mx-auto mt-16">
          <hr className="border-t-2 border-white my-6 w-1/2" />
          <h1 className="text-3xl font-bold text-yellow-600">Soft Skills</h1>
          <h1 className="text-2xl font-bold text-yellow-700">Leadership</h1>
          <br />
          <br />
          <h1 className="text-2xl font-bold">What is Leadership?</h1>
          <br />
          <br />
          <h2 className="text-1xl text-bold">Leadership is a set of behaviors used to help people align their </h2>
          <h2 className="text-1xl text-bold">collective direction, to execute strategic plans, and to continually </h2>
          <h2 className="text-1xl text-bold">renew an organization.</h2>
          <hr className="border-t-2 border-white my-6 w-1/2" />
        </div>
      </div>

      {/* New Team Section */}
      <div className="bg-black py-24 sm:py-12">
        
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-left text-white">Browse Leadership courses</h2>
          <div className="grid grid-cols-4 gap-8 justify-items-center mt-16">
            {/* Team Member 1 */}
            <a href="/service/softskill/leadership" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof1.png" alt="Team Member 1" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Leadership when you are the youngest there</h3>
              <p className="text-xs">Hans Leon</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 2 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof2.png" alt="Team Member 2" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Signs of a good leader</h3>
              <p className="mt-5 text-xs">Kim Jimmy</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 3 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof3.png" alt="Team Member 3" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Responsibilities of a leader</h3>
              <p className="mt-5 text-xs">Johnathan Gilliam</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 4 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof4.png" alt="Team Member 4" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">The importance of decision making in leadership</h3>
              <p className="text-xs">Lilianne Lilith </p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 5 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof5.png" alt="Team Member 5" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">How to develop better decision making</h3>
              <p className="text-xs">William Andrian</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 6 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof6.png" alt="Team Member 6" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Principles of a leader</h3>
              <p className="mt-5 text-xs">Gregory Frank</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 7 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof7.png" alt="Team Member 7" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Powerful skills for leadership</h3>
              <p className="mt-5 text-xs">Dianne Kellis</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 8 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof8.png" alt="Team Member 8" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Characteristics of a good leader</h3>
              <p className="mt-5 text-xs">Dennis Jaden</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 9 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof9.png" alt="Team Member 9" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Effective leadership: learn the principles</h3>
              <p className="text-xs">Reynold Winston</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 10 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof10.png" alt="Team Member 10" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">How you can influence the company with leadership</h3>
              <p className="text-xs">Vincent Novolski</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 11 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof11.png" alt="Team Member 11" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Finding your leadership style: which one is for you?</h3>
              <p className="text-xs">Anna Handerson</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 12 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/corsof12.png" alt="Team Member 12" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Developing your leadership style</h3>
              <p className="mt-5 text-xs">Brendan Smith</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>
          </div>
          <br />
          <br />
          <hr className="w-full border-t-2 border-white mt-1" />

          {/* New Section: Button Grid */}
          <div className="bg-black py-16">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">Other Topics</h2>
              <div className="grid grid-cols-4 gap-4 justify-items-center mt-16">
                {/* First row */}
                <a href="/service/softskill/popular" className="bg-black border border-white font-semibold text-white py-2 px-8 rounded block hover:text-gold">
                  Leadership
                </a>
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-10 rounded block hover:text-gold">
                  Teamwork
                </a>
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-11 rounded block hover:text-gold">
                  Analysis
                </a>
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-8 rounded block hover:text-gold">
                  Adaptation
                </a>
                {/* Second row */}
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-4 rounded block hover:text-gold">
                  Public Speaking
                </a>
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-5 rounded block hover:text-gold">
                  Communication
                </a>
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-10 rounded block hover:text-gold">
                  Creativity
                </a>
                <a href="#" className="bg-black border border-white font-semibold text-white py-2 px-8 rounded block hover:text-gold">
                  Networking
                </a>
              </div>
              <div className="mt-10 text-white text-left">
                <a href="/services/softskill" className="inline-block bg-black border border-white font-semibold text-white py-2 px-8 rounded  hover:text-gold w-auto">
                  Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
