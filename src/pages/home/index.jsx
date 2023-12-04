/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../Components/Navbar';
import FooterComponent from '../../Components/Footer';
import { Carousel } from 'flowbite-react';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen ">
        <section className="container header">
          <img src="/public/image/bg-header-text-2.jpg" alt="header" />
        </section>
        <section className="background-image-text-container h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className="container">
            <div className="text-overlay text-white">
              <h1 className='text-4xl text-center font-bold mb-4'>The Growing Technology Career</h1>
              <p className='text-center'>Hiring in the computer and information technology fields has faster projected growth between 2020 and 2030 than all other fields. </p>
            </div>
            <div className="text-overlay text-white">
              <h1 className='text-4xl text-center font-bold mb-4'>The Technology Career</h1>
              <p className='text-center'>Hiring in the computer and information technology fields has faster projected growth between 2020 and 2030 than all other fields. </p>
            </div>
            <div className="text-overlay text-white">
              <h1 className='text-4xl text-center font-bold mb-4'>The Growing Career</h1>
              <p className='text-center'>Hiring in the computer and information technology fields has faster projected growth between 2020 and 2030 than all other fields. </p>
            </div>
          </Carousel>
        </section>

        <div className="container mx-auto">
          <section className="bg-black p-6 mt-8 mb-6 shadow-md rounded-md">
            <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              <br />
              Providing what you need
            </h1>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 mb-6 pt-12">
            {/* Kolom 1 */}
            <div className="bg-transparancy p-2 flex justify-center">
              {/* Konten kolom 1 */}
              <img style={{ width: '100%', height: 'auto' }} src="/public/image/Trending-it.png" alt="Trending" />
            </div>

            {/* Kolom 2 */}
            <div className="px-4">
              {/* Konten kolom 2 */}
              <h3 className="font-bold pt-12 pb-4 mb-6 mt-12 text-left text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
                <br />
                Trending IT Job Markets
              </h3>
              <p className="pt-12 pb-4 mr-12 text-left sm:text-lg md:text-xl lg:text-xl text-white">
                Following the latest job markets in Information Technology, we strive to provide the most searched and trending Information Technology jobs from Jabodetabek to all of Indonesia, striving to the world. Noticing that
                Information Technology is growing and will be growing larger, we strive to provide the future of our generation a chance to learn and develop skills related to Information Technology.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <section className="bg-black p-2 mt-4 mb-1 shadow-md rounded-md">
            <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">Train</h1>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 mb-6 pt-1">
            {/* Kolom 1 */}
            <div className="p-3">
              {/* Konten kolom 1 */}
              <h3 className="font-bold pb-4 mb-6 px-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Hard Skills</h3>
              <p className="px-8 pb-4 text-center sm:text-lg md:text-xl lg:text-xl text-white">
                Whether you're aiming to master programming languages, sharpen your technical expertise, or refine your communication skills, we have the resources you need. Let's embark on a journey of skill development together, where
                learning meets practical application. Elevate your career prospects with the hard skills that employers are seeking.
              </p>
            </div>

            {/* Kolom 2 */}
            <div className="flex items-center">
              {/* Konten kolom 2 */}
              <img style={{ width: '100%', height: 'auto' }} src="/public/image/Train.png" alt="Train" />
            </div>

            <div className="p-3">
              {/* Konten kolom 3 */}
              <h3 className="font-bold pb-4 mb-6 px-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Soft Skills</h3>
              <p className="px-8 pb-4 text-center sm:text-lg md:text-xl lg:text-xl text-white">
                Explore our curated selection of video and resources tailored to enhance your soft skills – those invaluable qualities that go beyond technical know-how. Whether you're aiming to refine your communication, strengthen your
                leadership capabilities, or foster a collaborative mindset, we have the resources you need.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-6 pt-12">
            {/* Kolom 1 */}
            <div className="p-5 px-12">
              {/* Konten kolom 1 */}
              <img style={{ width: '100%', height: 'auto' }} src="/public/image/passEdua.png" alt="Passionate educators a" />
            </div>

            {/* Kolom 2 */}
            <div className="">
              {/* Konten kolom 2 */}
              <h3 className="font-bold pb-4 py-6 mb-6 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">Passionate Educators</h3>
              <p className="pt-4 mx-4 pb-4 text-center sm:text-lg md:text-xl lg:text-xl text-white">
                Discover a wealth of courses and resources designed to impart not just skills, but a genuine enthusiasm for learning. Our educators are more than instructors; they are mentors driven by a love for their craft and a desire to
                inspire. Whether you're diving into a new skill or seeking to deepen your expertise, our community of passionate educators is here to guide you every step of the way.
              </p>
            </div>

            <div className="p-5 mt-11 px-12">
              {/* Konten kolom 3 */}
              <img style={{ width: '100%', height: 'auto' }} src="/public/image/passEdub.png" alt="Passionate educators b" />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-12">
            {/* Kolom 1 */}
            <div className="bg-transparancy flex justify-center">
              {/* Konten kolom 1 */}
              <img style={{ width: 'auto', height: '75%' }} src="/public/image/personalMentoring.png" alt="Personal Mentoring" />
            </div>

            {/* Kolom 2 */}
            <div className="p-3 ">
              {/* Konten kolom 2 */}
              <h3 className="font-bold pt-6 pb-4 mb-6 mt-12 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Personal Mentoring</h3>
              <p className="pt-8 pb-4 mr-32 text-left sm:text-lg md:text-xl lg:text-xl text-white">
                Embark on a transformative journey with Edutor, a bespoke personal mentoring service designed to empower individuals on their path to success. Our service connects you with experienced mentors who are dedicated to guiding
                you through your personal and professional development, unlocking your full potential.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {/* Kolom 1 */}
            <div className="p-3">
              {/* Konten kolom 1 */}
              <h3 className="font-bold p-24 py-12 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">CV/Resume Building</h3>
              <p className="pt-2 p-24 pb-4 text-left sm:text-lg md:text-xl lg:text-xl text-white">We will teach you step-by-step on how to create the most interactive and interesting resume/CV that is sought by most hiring company.</p>
            </div>

            {/* Kolom 2 */}
            <div className="mr-12 py-2 flex justify-center">
              {/* Konten kolom 2 */}
              <img style={{ width: '80%', height: 'auto' }} src="/public/image/cvBuild.png" alt="CV Build" />
            </div>
          </div>
        </div>

        <div className="container mx-auto py-12">
          <section className="bg-black p-6 mt-14 shadow-md rounded-md">
            <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">Grow with Us</h1>
            <p className="pt-8 pb-4 text-center sm:text-lg md:text-xl lg:text-xl text-white">Why you should grow with us..</p>
          </section>
        </div>

        <div className="container mx-auto">
          <div className="p-12 flex items-center">
            {/* Gambar di sebelah kiri */}
            <div>
              <img style={{ width: '80%', height: 'auto' }} src="/public/image/bulet1.png" alt="Icon" />
            </div>

            {/* Teks di sebelah kanan */}
            <div className="ml-4 text-white">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Up to date tech job market</h2>
              <p className="pt-6 text-xl sm:text-lg md:text-xl lg:text-xl">
                We Provide you with the most up to date <br /> technologies, information and skill <br /> that are the most searched one on jobs.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 mb-6">
            {/* Kolom 1 */}
            <div className="p-2">{/* Konten kolom 1 */}</div>

            {/* Kolom 2 */}
            <div className="flex items-center">
              {/* Konten kolom 2 */}
              <div>
                <img style={{ width: '100%', height: 'auto' }} src="/public/image/bulet2.png" alt="Icon" />
              </div>
              <div className="ml-4 text-white">
                <h2 className="font-bold px-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Core Hard Skills</h2>
                <p className="px-6 mr-12 pt-6 text-xl sm:text-lg md:text-xl lg:text-xl">
                  Hard skills can include knowing how to use specific tools, <br /> platforms, or computer programs as well as how to perform <br /> certain tasks and processes needed to do your job.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-12">
          <div className=" flex items-center">
            {/* Gambar di sebelah kiri */}
            <div>
              <img style={{ width: '80%', height: 'auto' }} src="/public/image/bulet3.png" alt="Icon" />
            </div>

            {/* Teks di sebelah kanan */}
            <div className="ml-4 text-white">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Professional Soft Skills</h2>
              <p className="pt-6 sm:text-lg md:text-xl lg:text-xl">
                A professional skill describes a habit, personality trait <br />
                or ability that positively affects your performance in the <br />
                workplace. Having such skills can benefit people in nearly <br />
                all job positions, industries and work environments.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-12">
          <section className="bg-black mt-4 mb-2 pt-14 shadow-md rounded-md">
            <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">What they say</h1>
          </section>

          <div className="carousel">
            <a className="carousel-item" href="#">
              <div className="testi">
                <div className="img-area">
                  <img src="../../public/image/ment1.png" alt="Mentor 1" />
                </div>
                <p>“Ayo, mulailah konsultasi bersama expert kami. Perjalananmu untuk lebih sehat mental telah dimulai.”</p>
                <h4>Muhammad Yusuf</h4>
                <h5>Web Designer</h5>
              </div>
            </a>
            <a className="carousel-item" href="#">
              <div className="testi">
                <div className="img-area">
                  <img src="./public/image/ment2.jpg" alt="Mentor 2" />
                </div>
                <p>“Ayo, mulailah konsultasi bersama expert kami. Perjalananmu untuk lebih sehat mental telah dimulai.”</p>
                <h4>Alexandria</h4>
                <h5>Web Designer</h5>
              </div>
            </a>
            <a className="carousel-item" href="#">
              <div className="testi">
                <div className="img-area">
                  <img src="./public/image/ment3.jpg" alt="Mentor 3" />
                </div>
                <p>“Ayo, mulailah konsultasi bersama expert kami. Perjalananmu untuk lebih sehat mental telah dimulai.”</p>
                <h4>James </h4>
                <h5>Web Designer</h5>
              </div>
            </a>
            <a className="carousel-item" href="#">
              <div className="testi">
                <div className="img-area">
                  <img src="./public/image/ment4.jpg" alt="Mentor 4" />
                </div>
                <p>“Ayo, mulailah konsultasi bersama expert kami. Perjalananmu untuk lebih sehat mental telah dimulai.”</p>
                <h4>Trihartanto</h4>
                <h5>Web Designer</h5>
              </div>
            </a>
            <a className="carousel-item" href="#">
              <div className="testi">
                <div className="img-area">
                  <img src="./public/image/ment5.jpg" alt="Mentor 5" />
                </div>
                <p>“Ayo, mulailah konsultasi bersama expert kami. Perjalananmu untuk lebih sehat mental telah dimulai.”</p>
                <h4>Teguh Pamungkas</h4>
                <h5>Web Designer</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};