import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <>
      <footer className="bg-gray-700 shadow-2xl">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="\gap-2 flex items-center mb-4 sm:mb-1">
              <img src="/public/image/logoedu.png" alt="edutorlogo" />
              <img src="/public/image/sponsored.png" width={250} alt="edutorlogo" />

              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
            </a>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 xl:pb-12 lg:pb-10 md:pb-8 sm:pb-8 pb-8">
              <div>
                <Footer.Title title="About" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/about" className="text-white">
                    Edutor
                  </Footer.Link>
                  <Footer.Link href="/blog#community" className="text-white">
                    Community
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="" className="text-white">
                    Github
                  </Footer.Link>
                  <Footer.Link href="" className="text-white">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://en.wikipedia.org/wiki/Privacy_policy" className="text-white">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="https://en.wikipedia.org/wiki/Terms_of_service" className="text-white">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <hr className="rounded xl:pt-12 lg:pt-10 md:pt-8 sm:pt-8 pt-8"></hr>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Savior 8 ™" href="" year={2023} style={{ color: 'white' }} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="text-white" href="https://facebook.com" icon={BsFacebook} />
              <Footer.Icon className="text-white" href="https://instagram.com" icon={BsInstagram} />
              <Footer.Icon className="text-white" href="https://twitter.com" icon={BsTwitter} />
              <Footer.Icon className="text-white" href="https://github.com/Edutor-massive8" icon={BsGithub} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
