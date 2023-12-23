
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#DADADA] p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#product" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-400 mr-2">
                  Login 
                </Link>
                /
                <Link to="/sign-up" className="hover:text-gray-400 ml-2">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex">
              <a
                href="#"
                className="mr-4 hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
            <p>Stay updated with our latest products and offers.</p>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full rounded"
              />
              <button className="btn bg-black text-white btn-outline px-4 py-2 rounded mt-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
