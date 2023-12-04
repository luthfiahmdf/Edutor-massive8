import { Link } from 'react-router-dom';
import FooterComponent from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import CardSlider from '../../../Components/Swiper';

const cardData = [
  {
    title: 'FrontEnd Developer',
    imageUrl: '/public/image/card1.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'BackEnd Developer',
    imageUrl: '/public/image/card2.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'IOS Developer',
    imageUrl: '/public/image/card3.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'Android Developer',
    imageUrl: '/public/image/card4.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'Data Scients',
    imageUrl: '/public/image/card5.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'Data Enginer',
    imageUrl: '/public/image/card6.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'Data Analist',
    imageUrl: '/public/image/card7.png',
    linkHref: '/services/hardskill/careerpath',
  },
  {
    title: 'UI/UX',
    imageUrl: '/public/image/card2.png',
    linkHref: '/path/to/page2',
  },
];

export const SoftSkill = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen flex items-center justify-center text-white text-left bg-cover bg-center" style={{ backgroundImage: "url('/image/soft.png')" }}>
        <div className="container mx-auto mt-4">
          <h1 className="text-3xl font-bold text-yellow-600">Soft Skills</h1>
          <br />
          <br />
          <br />
          <h1 className="text-4xl font-bold">Develop strong</h1>
          <h1 className="text-4xl font-bold">professionalism with us</h1>
          <br />
          <br />
          <h2 className="text-1xl font-bold">Engaging and inspirational videos to motivate you to become a</h2>
          <h2 className="text-1xl font-bold">better person.</h2>
          <br />
          <br />
          <button>
            <Link to="/service/softskill/leadership" className="border border-white font-semibold text-white py-2 px-4 rounded block hover:text-gold w-25">
              Explore Now
            </Link>
          </button>
        </div>
      </div>

      {/* New Featured Section */}
      <div className="bg-black py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">Why learn Soft Skills?</p>
            <p className="mt-6 text-xm leading-8 text-white">Developing soft skills are essential for the growth and longevity of an individual, both in professional and personal contexts. Soft skills provide as following:</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <dl className="grid max-w-xl grid-cols-3 gap-x-8 gap-y-10 lg:max-w-none lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-r bg-black">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Enhanced Communication
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Soft skills like communication, empathy, and active listening are vital for effective interaction with others. </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-r bg-black">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  Leadership Development
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Skills such as decision-making, emotional intelligence, and the ability to motivate and inspire others are essential for successful leadership roles.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-r bg-black">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Problem Solving
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Skills like critical thinking, creativity, and adaptability help navigate challenges and find innovative solutions.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-r bg-black">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Team Collaboration
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Soft skills like collaboration, conflict resolution, and adaptability foster a harmonious and productive environment within teams.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-r bg-black">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Career Advancement
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Having strong soft skills can give you a competitive edge in job interviews and career advancement opportunities.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-r bg-black">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Adaptation to Change
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Soft skills enable individuals to embrace change, learn new skills, and thrive in diverse environments.</dd>
              </div>
            </dl>
          </div>

          {/* New Section: Button Grid */}
          <div className="bg-black py-16">
            <div className="container mx-auto mt-16">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">Popular Topics</h2>
              <div className="grid grid-cols-4 gap-4 justify-items-center mt-16">
                {/* First row */}
                <Link to="/service/softskill/popular" className="bg-black border border-white font-semibold text-white py-2 px-8 rounded block hover:text-gold">
                  Leadership
                </Link>
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
            </div>
          </div>

          <div className="lg:col-span-3 xl:col-span-3 text-center text-white mt-16">
            <h1 className="font-bold text-3xl">Mentor</h1>
            <div className="mt-12 mb-40">
              <CardSlider cardData={cardData} />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
