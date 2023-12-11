import { Link } from 'react-router-dom';

export default function FormQuestion() {
  const validateEmail = (email) => {
    // Regular expression for a valid email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    // Regular expression for a valid phone number
    const regex = /^\d+$/;
    return regex.test(phone);
  };

  const handleSendClick = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const question = document.getElementById('question').value;

    if (!validateEmail(email)) {
      alert('Invalid email address');
      document.getElementById('email').classList.add('border-red-500');
      return;
    } else {
      document.getElementById('email').classList.remove('border-red-500');
    }

    if (!validatePhone(phone)) {
      alert('Phone number should contain only digits');
      document.getElementById('phone').classList.add('border-red-500');
      return;
    } else {
      document.getElementById('phone').classList.remove('border-red-500');
    }

    // Perform send logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Question:', question);
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="bg-black min-h-max p-12 rounded shadow-md max-w-8xl w-full">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">Ask Question</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6 shadow-xl">
                <input type="text" id="name" placeholder="Your Name" className="w-full p-3 bg-gray-700 shadow-md rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-6 shadow-xl">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 shadow-md rounded-md focus:outline-none focus:border-blue-500"
                  onBlur={() => {
                    if (!validateEmail(document.getElementById('email').value)) {
                      document.getElementById('email').classList.add('border-red-500');
                    } else {
                      document.getElementById('email').classList.remove('border-red-500');
                    }
                  }}
                />
              </div>
              <div className="mb-6 shadow-xl">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full p-3 bg-gray-700 shadow-md rounded-md focus:outline-none focus:border-blue-500"
                  onBlur={() => {
                    if (!validatePhone(document.getElementById('phone').value)) {
                      document.getElementById('phone').classList.add('border-red-500');
                    } else {
                      document.getElementById('phone').classList.remove('border-red-500');
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 mb-6 shadow-sm rounded-md">
              <textarea id="question" placeholder="Your Question" rows="5" className="w-full p-9 bg-gray-700 shadow-md rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </div>

          <div className="text-center">
            <button type="button" className="bg-black text-white border border-white hover:text-black hover:bg-gold focus:ring-white font-medium rounded-md text-lg px-6 py-3 self-start shadow-xl" onClick={handleSendClick}>
              <Link to="/service/hardskill/careerpath2">Send</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
