import { IoHome } from 'react-icons/io5';
import logo from '../assets/images/logo.png'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#f1f2f6] text-neutral-content px-28 py-10">
            <aside className="text-black">
          <img className="w-24 " src={logo} alt="" />
          <p className="font-extrabold text-3xl text-gray-700 tracking-widest">BENEVO</p>

          <p className="flex gap-4 items-center">
            <span className="text-[#eb2f06] text-2xl">
              <IoHome />
            </span>
            48, Clifford Avenue, Austin, TX
          </p>

          <p className="flex gap-4 items-center ">
            <span className="text-[#eb2f06] text-2xl">
              <BsFillTelephoneFill />
            </span>
            +1 2584 2548 4785
          </p>

          <p className="flex gap-4 items-center ">
            <span className="text-[#eb2f06] text-2xl">
              <MdEmail />
            </span>
            info@benevo.com
          </p>

          <p className="">Copyright © 2024 - All right reserved</p>
        </aside>
  <nav>
    <h6 className="text-gray-800 font-bold text-3xl">Social</h6>
    <div className="grid grid-flow-col gap-4">
    <div className="grid grid-flow-col gap-4 text-3xl">
            <FaFacebook className="text-blue-600" />
            <FaYoutube className="text-red-800" />
            <FaTwitter className="text-blue-800" />
            <FaSquareInstagram className="text-red-800" />
          </div>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;