import FooterComponent from '../../../../Components/Footer';
import Navbar from '../../../../Components/Navbar';

export const DetailMentors = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-black flex flex-col my-auto w-full justify-center items-center gap-y-8 ">
        <div className="flex flex-row w-[50%] justify-center items-center my-[10vh] gap-x-10">
          <div className="image">
            <img src="/public/image/mentor.png" alt="" />
          </div>
          <div className="detail text-white">
            <h1 className="font-bold text-gold text-2xl">Jeselyn Leon</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione libero at atque provident expedita pariatur quaerat possimus nihil, fugiat quis soluta tenetur nemo obcaecati aut maxime dignissimos voluptates, nam officia!
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-row w-[50%] justify-center items-center">
          <div className="image">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus dicta magnam quibusdam provident dolore laborum, nostrum repudiandae eveniet saepe blanditiis ipsam, officia ullam nihil voluptate perspiciatis. Adipisci,
            fugit repellendus?
          </div>
          <div className="detail">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione libero at atque provident expedita pariatur quaerat possimus nihil, fugiat quis soluta tenetur nemo obcaecati aut maxime dignissimos voluptates, nam officia!
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
