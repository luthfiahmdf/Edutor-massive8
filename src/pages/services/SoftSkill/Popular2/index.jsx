import FooterComponent from '../../../../Components/Footer';
import Navbar from '../../../../Components/Navbar';

export const Popular2 = () => {
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
          <h1 className="text-2xl font-bold text-yellow-700">Teamwork</h1>
          <br />
          <br />
          <h1 className="text-2xl font-bold">What is Teamwork?</h1>
          <br />
          <br />
          <h2 className="text-1xl text-bold">Teamwork is the collaborative effort of a group to achieve a </h2>
          <h2 className="text-1xl text-bold">common goal or to complete a task in an effective and efficient </h2>
          <h2 className="text-1xl text-bold">way. Teamwork is seen within the framework of a team, which is </h2>
          <h2 className="text-1xl text-bold">a group of interdependent individuals who work together towards </h2>
          <h2 className="text-1xl text-bold">a common goal. </h2>
          <hr className="border-t-2 border-white my-6 w-1/2" />
        </div>
      </div>

      {/* New Team Section */}
      <div className="bg-black py-24 sm:py-12">
        
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-left text-white">Browse Teamwork courses</h2>
          <div className="grid grid-cols-4 gap-8 justify-items-center mt-16">
            {/* Team Member 1 */}
            <a href="/service/softskill/leadership" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem1.png" alt="Team Member 1" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">What is teamwork?</h3>
              <p className="text-xs mt-5">Yuliana Hani</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 2 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem2.png" alt="Team Member 2" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">10 Important Teamwork Skills</h3>
              <p className="mt-5 text-xs">Patricia Lia</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 3 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem3.png" alt="Team Member 3" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">The secret of a good teamwork</h3>
              <p className="mt-5 text-xs">Gilbert Young</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 4 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem4.png" alt="Team Member 4" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Improving your teamwork for better development</h3>
              <p className="text-xs">Western Francis</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 5 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem5.png" alt="Team Member 5" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Communication and teamwork</h3>
              <p className="text-xs mt-5">Emmet Drake</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 6 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem6.png" alt="Team Member 6" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">How to have better teamwork</h3>
              <p className="mt-5 text-xs">Wenson Hilton</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 7 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem7.png" alt="Team Member 7" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Examples of teamwork and how you can be better at it</h3>
              <p className="text-xs">Queens Hills</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 8 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem8.png" alt="Team Member 8" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">The secret to good teamwork</h3>
              <p className="mt-5 text-xs">Jacob Jordan</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 9 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem9.png" alt="Team Member 9" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">The fundamentals of a good teamwork</h3>
              <p className="text-xs">Vincent Louis</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 10 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem10.png" alt="Team Member 10" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Empathy for better teamwork</h3>
              <p className="text-xs mt-5">Vanessa Maria</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 11 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem11.png" alt="Team Member 11" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">Discover the types of teamwork</h3>
              <p className="text-xs mt-5">Ryan Enderson</p>
              <hr className="w-full border-t-2 border-black mt-2" />
            </a>

            {/* Team Member 12 */}
            <a href="#" className="bg-gray-300 flex flex-col items-center justify-start border border-black text-black py-2 px-10 hover:bg-gray-500">
              <img src="/public/image/cortem12.png" alt="Team Member 12" className="w-full h-full object-contain" />
              <br />
              <hr className="w-full border-t-2 border-black mb-2" />
              <span className="text-black text-xs">4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (1k reviews)</span>
              <h3 className="text-sm font-bold">How to build strong teamwork</h3>
              <p className="mt-5 text-xs">Louisa Garreth</p>
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
                <a href="/service/softskill/popular2" className="bg-black border border-white font-semibold text-white py-2 px-10 rounded block hover:text-gold">
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
