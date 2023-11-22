import { Accordion } from 'flowbite-react';
import Navbar from '../../../Components/Navbar';

export const Advice = () => {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
        <div className="col-span-1">
          <h1 className="font-bold text-4xl pb-5 font-['inika'] text-yellow-500">Advice</h1>
          <br />
          <h1 className="font-bold text-4xl pb-5 font-['inika'] text-white">Providing the newest advice for you</h1>
          <div className="font-normal text-1xl pb-9 font-['inika'] text-white">Up to date articles with interesting graphics to kickstart and accelerate your career</div>
        </div>
        <div className="col-span-1 flex justify-center">
          <img className="max-w-full h-auto bg-white rounded-xl" src="public/image/image_26.png" alt="" />
        </div>
      </div>

      <div className="w-3/4">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className="font-['inika']">Starting Your Career</Accordion.Title>
            <Accordion.Content>
              <div className="flex">
                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_28.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">Learn how to make curriculum vitae</div>
                    <p className="text-gray-700 text-base font-['inika']">
                      Discover the secret to crafting a winning curriculum vitae that stands out from the competition. Our comprehensive curriculum vitae writing course is designed to teach you the essential....
                    </p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_29.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">Communication skill used on works</div>
                    <p className="text-gray-700 text-base font-['inika']">
                      Whether you're a professional, freelancer, or entrepreneur, strong communication skills are the key to success. Imagine being able to convey your ideas with confidence, persuade....
                    </p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_30.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">How to Write a Must-Open Cold Email</div>
                    <p className="text-gray-700 text-base font-['inika']">
                      In the fast-paced world of digital communication, the art of crafting a compelling cold email has become a valuable skill. Whether you're reaching out to potential clients, collaborators, or employers......
                    </p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-['inika']">Finding A Job</Accordion.Title>
            <Accordion.Content>
              <div className="flex">
                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_31.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">Learn how to prepare informational interview</div>
                    <p className="text-gray-700 text-base font-['inika']">Imagine having direct access to industry insiders who can provide you with exclusive knowledge, valuable advice, and potential job opportunities.....</p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_32.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">How to work with a recruiter to find a job</div>
                    <p className="text-gray-700 text-base font-['inika']">Are you tired of submitting countless job applications and never hearing back? Discover the power of informational interviews - a proven strategy that can....</p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_33.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">How to Find a Job: Our 8 Best Hacks to Job Searching</div>
                    <p className="text-gray-700 text-base font-['inika']">Don't waste another minute scrolling through job boards aimlessly. Get our exclusive guide to unlock the secrets to a successful job search today!</p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-['inika']">Management</Accordion.Title>
            <Accordion.Content>
              <div className="flex">
                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_34.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">Ways for you to study efficiently</div>
                    <p className="text-gray-700 text-base font-['inika']">
                      Whether you're a professional, freelancer, or entrepreneur, strong communication skills are the key to success. Imagine being able to convey your ideas with confidence, persuade....
                    </p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_35.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">Ways for you to study efficiently</div>
                    <p className="text-gray-700 text-base font-['inika']">
                      Whether you're a professional, freelancer, or entrepreneur, strong communication skills are the key to success. Imagine being able to convey your ideas with confidence, persuade....
                    </p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg m-4">
                  <img className="w-full" src="public/image/image_36.png" alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-['inika']">Ways for you to study efficiently</div>
                    <p className="text-gray-700 text-base font-['inika']">
                      Whether you're a professional, freelancer, or entrepreneur, strong communication skills are the key to success. Imagine being able to convey your ideas with confidence, persuade....
                    </p>
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>

      <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
        <div className="text-white text-2xl font-bold font-['Inika']">Join our community for latest updates!</div>
        <form className="flex justify-end">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900"></label>
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
      </div>
    </main>
  );
};
