import { Link } from 'react-router-dom';

export const Register = () => {
  const handleSocialMediaLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="flex">
      <div className="flex items-center justify-center w-5/12">
        <div className="bg-white p-8 rounded-xl shadow-xl w-2/3 border border-gray-300-shadow-xl left-1/2 transform translate-x-1/2 z-40">
          <h2 className="text-2xl mb-4 font-bold">Register</h2>
          <p>
              Already have an account ?
              <Link to="/Login" className="text-blue-500">
                &nbsp;Login
              </Link>
            </p>
          <form className="mt-8 space-y-6" action="#">
            <div>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Email..." required />
            </div>
            <div>
              <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Username..." required />
            </div>
            <div>
              <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Password..." required />
            </div>
            <div>
              <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Confirm Password..." required />
            </div>
            <div className="flex justify-center flex-col items-center">
            <a href="/login" class="w-52 px-3 py-2 mb-1 text-base font-bold text-center shadow-md bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300 mx-auto">
    Register
  </a>
            </div>

            {/* Text and social media login buttons */}
            
            <p className="text-xs text-center mt-4 mb-4">or sign up with</p>
            <div className="flex justify-center">
              <button className="w-10 h-10 bg-white rounded-full mx-2" onClick={() => handleSocialMediaLogin('Facebook')}>
                <img src="/public/image/facebook-icon.png" alt="Facebook" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full mx-2" onClick={() => handleSocialMediaLogin('Google')}>
                <img src="/public/image/google-icon.png" alt="Google" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full mx-2" onClick={() => handleSocialMediaLogin('Apple')}>
                <img src="/public/image/apple-logo.png" alt="Apple" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-cover bg-center h-screen w-7/12 relative" style={{ backgroundImage: `url('/public/image/bg-login.png')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};