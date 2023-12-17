// icons
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

//components
import HeroImg from "../components/HeroImg";

// image import
import heroBackground from "../assets/img/bg-about.jpg";

function Content() {
  return (
    <div>
      <HeroImg backgroundImage={heroBackground} title="Content" subtitle="Lorem Ipsum" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a href="/" aria-label="Go Home" title="Logo" className="inline-block mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Lorem ipsum dolor sit 
              <br className="hidden md:block" />
              amet consectetur {" "}
              <span className="inline-block text-deep-purple-accent-400">adi elit</span>
            </h5>
            <p className="mb-6 text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae explicabo. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
              eaque ipsa quae explicabo.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
            <a
                href="/"  // Update with your LinkedIn URL
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <FaLinkedin className="w-6 h-6 text-deep-purple-accent-400" />
            </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <FaFacebookSquare className="w-6 h-6 text-deep-purple-accent-400" />
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <FaYoutube className="w-6 h-6 text-deep-purple-accent-400" />
              </a>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
