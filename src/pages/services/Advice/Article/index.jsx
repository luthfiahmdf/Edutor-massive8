import { Link } from "react-router-dom";
import Navbar from "../../../../Components/Navbar";
import FooterComponent from "../../../../Components/Footer";

export const Article = () => {
    return (
        <>
        <Navbar />
      <main className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
          <div className="col-span-1 flex flex-col items-start">
            <h1 className="font-bold text-4xl pb-5 font-['inika'] text-yellow-500">Advice</h1>
            <br />
            <h1 className="font-semibold text-sm font-['inika'] text-neutral-400">Nov 1, 2023</h1>
            <h1 className="font-bold text-4xl pb-5 font-['inika'] text-white">Ways for you to study efficiently</h1>
            <div className="font-normal text-1xl pb-9 font-['inika'] text-white">
              Gain more knowledge with a minimum wasted time and effort.
            </div>
            <div className="flex items-center">
              <img className="w-14 h-14 rounded-full mr-3" src="/public/image/image_37.png" alt="" />
              <div>
                <div className="w-[177px] h-[33px] text-white text-sm font-bold font-['Inika'] leading-7">Diana Hopkins</div>
                <div className="w-[107px] h-[15px] text-neutral-400 text-xs font-bold font-['Inika'] leading-[16.92px]">
                  Journalist
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-end">
            <img className="max-w-64 h-64 object-cover rounded-xl" src="/public/image/image_34.png" alt="" />
          </div>
          </div>
  
          <div className="container max-w-5xl mx-auto grid grid-cols-1 py-8">
          <div className="w-[786px] text-white text-lg font-normal font-['Inika'] leading-9">What you need to do first is how to build a comfortable learning atmosphere. There are many ways to create a learning mood, including: you can study while listening to music, study in comfortable places, for example in a park or by a lake, or in an air-conditioned room. </div>          
          <h1 className="text-white mt-5 font-['Inika']">Studying efficiently is crucial for effective learning. Here are some tips to help you study more efficiently:</h1>
            <ol className="list-decimal list-inside mt-4 text-white">
              <li className="font-bold font-['Inika']">Set Clear Goals:</li>
                <ul className="list-disc list-inside ml-4 text-white font-['Inika']">
                  <li>Define specific, measurable goals for each study session.</li>
                  <li>Break down larger goals into  smaller tasks to make them more manageable.</li>
                </ul>
              <li className="font-bold font-['Inika']">Create a Schedule:</li>
                <ul className="list-disc list-inside ml-4 text-white font-['Inika']">
                    <li>Develop a study schedule that includes dedicated time for each subject.</li>
                    <li>Take breaks to avoid burnout, as the brain's ability to concentrate diminishes over time.</li>
                </ul>
              <li className="font-bold font-['Inika']">Active Learning:</li>
                <ul className="list-disc list-inside ml-4 text-white font-['Inika']">
                    <li>Engage with the material actively rather than just passively reading or listening.</li>
                    <li>Use techniques like summarizing information in your own words, teaching the material to someone else, or creating flashcards.</li>
                </ul>
            </ol>
            
            <br />
            <div className="w-[857px] h-[141px] relative mx-auto">
              <img className="w-[857px] h-[141px] left-1/2 transform -translate-x-1/2 top-0 absolute" src="/public/image/image_38.png" />
              <div className="w-[370.11px] h-[17.56px] left-[221.75px] top-[34px] absolute text-white text-[35px] font-bold font-['Inika'] leading-[33.35px]">Eager to learn more?</div>
              <div className="w-[477.05px] h-[17px] left-[166px] top-[90.67px] absolute text-white text-[35px] font-bold font-['Inika'] leading-[33.35px]"> Explore our Soft Skill service</div>
            </div>
            
            <ol className="list-decimal list-inside mt-4 text-white">
              <li className="font-bold font-['Inika']">Variety of Resources:</li>
                <ul className="list-disc list-inside ml-4 text-white font-['Inika']">
                  <li>Use a variety of resources (textbooks, online materials, videos) to gain different perspectives on the topic.</li>
                  <li>Incorporate multimedia for a more dynamic learning experience.</li>
                </ul>
              <li className="font-bold font-['Inika']">Prioritize and Focus:</li>
                <ul className="list-disc list-inside ml-4 text-white font-['Inika']">
                    <li>Identify the most important topics and focus on them first.</li>
                    <li>Avoid multitasking, as it can lead to decreased concentration and retention.</li>
                </ul>
              <li className="font-bold font-['Inika']">Effective Note-Taking:</li>
                <ul className="list-disc list-inside ml-4 text-white font-['Inika']">
                    <li>Develop a system for note-taking that works for you, such as the Cornell method or mind mapping.</li>
                    <li>Review and organize your notes regularly.</li>
                </ul>
            </ol>
          </div>
          <hr className="w-4/5 border-t-2 border-white mt-1" />
  
          {/* more advice */}
          <div className="flex py-14">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-['Inika']">More Advice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img className="w-full" src="/public/image/image_39.png" alt=""/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-['inika']">Tips to Increase your efficiency at work</div>
                  <p className="text-gray-700 text-base font-['inika']">
                  Being efficient is a great way for your work. Learn to do it now!
                  </p>
                  <Link to="/comingsoon" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Read More
                    </Link>
                </div>
            </div>
  
            <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img className="w-full" src="/public/image/image_40.png" alt=""/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-['inika']">Why reading more is important</div>
                  <p className="text-gray-700 text-base font-['inika']">
                  Gain more knowledge by more efficient reading. Learn them now!
                  </p>
                  <Link to="/comingsoon" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Read More
                    </Link>
                </div>
            </div>
  
            <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img className="w-full" src="/public/image/image_33.png" alt=""/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-['inika']">How to Find a Job: Our 8 Best Hacks to Job Searching</div>
                  <p className="text-gray-700 text-base font-['inika']">
                  Our exclusive guide to unlock the secrets to a successful job search today!
                  </p>
                  <Link to="/comingsoon" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Read More
                    </Link>
                </div>
            </div>
            </div>
            </div>
          </div>
          <hr className="w-4/5 border-t-2 border-white mt-1" />
  
          {/* your email */}
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
         <div className="text-white text-2xl font-bold font-['Inika']">Join our community for latest updates!</div>
          <form className="flex justify-end">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              
            </label>
            <div className="ml-2.5 flex">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-['inika']"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="ml-2 block rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-['inika']"
              >
                Subscribe
              </button>
            </div>
          </form>
  
          <div className="mt-10 text-white text-left">
                  <a href="/services/advice" className="inline-block bg-black border border-white font-semibold text-white py-2 px-8 rounded  hover:text-gold w-auto">
                    Back
                  </a>
                </div>
        </div>
        
      </main>
      <FooterComponent />
      </>
    );
  };