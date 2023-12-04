import { Link } from 'react-router-dom';
import facebookIcon from '/public/image/facebook-icon.png'; // Path to Facebook icon image
import googleIcon from '/public/image/google-icon.png'; // Path to Google icon image
import appleIcon from '/public/image/apple-logo.png';

export const Login = () => {
  const handleSocialMediaLogin = (provider) => {
    // Handle login with the selected social media provider
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 container py-8 px-4 mx-auto max-w-screen lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - White Background */}
        <div className="w-full lg:max-w-md p-6 bg-white space-y-4 sm:p-8 shadow-xl">
  <div className="w-full lg:max-w-md p-6 space-y-4 sm:p-8">
            <h2 className="text-4xl font-bold text-blue-950">Login</h2>
            <div className="text-sm font-medium text-black">
              {`Don't have an account? `}
              <Link to="/Register" className="text-primary hover:underline text-blue-400">
                Register
              </Link>
            </div>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
                  placeholder="Username..."
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
                  placeholder="Password..."
                  required
                />
              </div>
              <div className="flex justify-center flex-col items-center"> {/* Button container */}
  <button
    type="submit"
    className="w-52 px-3 py-2 mb-3 text-base font-bold shadow-md text-center bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300 mx-auto"
  >
    Login
  </button>
  <button
    type="submit"
    className="w-52 px-3 py-2 text-base font-bold shadow-md border border-black text-center bg-primary hover:bg-secondary text-black bg-white rounded-lg focus:ring-4 focus:ring-blue-300 mx-auto"
  >
    Guest Account
  </button>
</div>

                {/* Text and social media login buttons */}
                <p className="text-xs text-center mt-4 mb-4">or sign up with</p>
                <div className="flex justify-center">
                  <button
                    className="w-10 h-10 bg-white rounded-full mx-2"
                    onClick={() => handleSocialMediaLogin('Facebook')}
                  >
                    <img src={facebookIcon} alt="Facebook" />
                  </button>
                  <button
                    className="w-10 h-10 bg-white rounded-full mx-2"
                    onClick={() => handleSocialMediaLogin('Google')}
                  >
                    <img src={googleIcon} alt="Google" />
                  </button>
                  <button
                    className="w-10 h-10 bg-white rounded-full mx-2"
                    onClick={() => handleSocialMediaLogin('Google')}
                  >
                    <img src={appleIcon} alt="Apple" />
                  </button>
                </div>
            </form>
          </div>
        </div>

        {/* Right Column - Background Image */}
        <div className="hidden lg:block lg:col-span-1 bg-cover" style={{ 
  backgroundImage: 'url("public/image/bg-login.png")', 
  height: '100%',
  width: '124%',
  backgroundPositionX: 'right', // Mengatur gambar latar belakang ke kanan
  backgroundPositionY: 'center', // Mengatur gambar latar belakang di tengah secara vertikal
  backgroundSize: '100% 124%' // Menutupi seluruh area secara proporsional
}}></div>

      </div>
    </div>
  );
};
