'use client';

// import { Dropdown, Navbar, Avatar } from 'flowbite-react';

// export default function NavbarWithDropdown() {
//     return (
//         <Navbar
//             fluid
//             className="bg-navbar-background dark:bg-gray-800 shadow-md text-white"
//         >
//             <Navbar.Brand href="https://flowbite-react.com">
//                 <span className="self-center whitespace-nowrap text-md font-semibold text-white ">
//                     Island Nomad
//                 </span>
//             </Navbar.Brand>
//             <div className="flex md:order-2">
//                 <Dropdown
//                     inline
//                     label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
//                 >
//                     <Dropdown.Header>
//                         <span className="block text-sm">
//                             Bonnie Green
//                         </span>
//                         <span className="block truncate text-sm font-medium">
//                             name@flowbite.com
//                         </span>
//                     </Dropdown.Header>
//                     <Dropdown.Item>
//                         Dashboard
//                     </Dropdown.Item>
//                     <Dropdown.Item>
//                         Settings
//                     </Dropdown.Item>
//                     <Dropdown.Item>
//                         Earnings
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item>
//                         Sign out
//                     </Dropdown.Item>
//                 </Dropdown>
//                 <Navbar.Toggle />
//             </div>
//             <Navbar.Collapse>
//                 <Navbar.Link
//                     href="#"
//                     className='text-white'
//                 >
//                     Home
//                 </Navbar.Link>
//                 <Navbar.Link
//                     href="#"
//                     className='text-white'
//                 >
//                     About
//                 </Navbar.Link>
//                 <Navbar.Link
//                     href="#"
//                     className='text-white'
//                 >
//                     Services
//                 </Navbar.Link>
//                 <Navbar.Link
//                     href="#"
//                     className='text-white'
//                 >
//                     Pricing
//                 </Navbar.Link>
//                 <Navbar.Link
//                     href="#"
//                     className='text-white'

//                 >
//                     Contact
//                 </Navbar.Link>
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }
import { CustomFlowbiteTheme, Modal, Tooltip } from 'flowbite-react';
import '../styles/custom-styles.scss'
import SearcBar from '../components/searchBar'
import { BiBed, BiTaxi, BiUserCircle, BiMenu, BiDollarCircle } from 'react-icons/bi';
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineAttractions, MdOutlineUnfoldMore, MdAddHomeWork } from "react-icons/md";
import { TbPlayFootball, TbFileInfo } from "react-icons/tb";
import { BsQuestionCircle, BsPhone } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const customThemeForModal: CustomFlowbiteTheme['modal'] = {
    content: {
      base: "relative h-full w-full p-0 md:h-auto",
      inner: 'relative rounded-0 bg-white shadow dark:bg-gray-700 flex flex-col h-[100vh]',
    },
  };

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <nav className="bg-gray-800 h-auto">
        <div className="container mx-auto flex items-center justify-between px-4 max-w-7xl mx-auto ">
          <div className="text-white font-semibold text-xl">IslandNomad</div>
          <div className="mr-2 flex space-x-2 lg:space-x-4 lg:ml-auto mt-5 sm:mr-2  max-sm:hidden">
            <Tooltip content="Select your currency"
              arrow={false}>
              <button className="hover:bg-gray-500 text-white px-4 py-2 rounded text-sm lg:text-base">
                LKR
              </button>
            </Tooltip>
            <Tooltip content="Customer Service help"
              arrow={false}>
              <button className="hover:bg-gray-500 text-white px-4 py-2 rounded text-sm lg:text-base">
                <BsQuestionCircle />
              </button>
            </Tooltip>
            <button className="hover:bg-gray-500 text-white px-4 py-2 rounded text-sm lg:text-base">
              List your property
            </button>
            <button className="bg-white hover:bg-gray-500 text-black px-4 py-2 rounded text-sm lg:text-base">
              Register
            </button>
            <button className="bg-white hover:bg-gray-500 text-black px-4 py-2 rounded text-sm lg:text-base">
              Sign in
            </button>
          </div>
          <div className="mr-2 flex space-x-2 lg:space-x-4 lg:ml-auto mt-5 sm:mr-2 sm:hidden">
            <button className="hover:bg-white text-white hover:text-blue-500 hover:border-blue-500 px-4 py-2 rounded text-4xl">
              <BiUserCircle />
            </button>
            <button className="hover:bg-white text-white hover:text-blue-500 hover:border-blue-500 px-4 py-2 rounded text-4xl"
              onClick={() => props.setOpenModal('default')}>
              <BiMenu />
            </button>
          </div>
        </div>
        <div className={`mt-2 flex space-x-2 px-4 max-w-7xl mx-auto ${isMobileScreen ? 'overflow-x-auto' : ''}`}>
          <button className="flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl border border-white">
            <BiBed className='mr-1' /> Bedrooms
          </button>
          <button className="flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl ">
            <TbPlayFootball className='mr-1' />Spots
          </button>
          <button className="flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl ">
            <GiCommercialAirplane className='mr-1' />Flights
          </button>
          <button className={`flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl ${isMobileScreen ? 'whitespace-nowrap' : 'max-sm:hidden'}`}>
            <BiTaxi className='mr-1' /> Car rentals
          </button>
          <button className={`flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl ${isMobileScreen ? '' : 'max-sm:hidden'}`}>
            <MdOutlineAttractions className='mr-1' /> Attractions
          </button>
          {!isMobileScreen && (
            <button className=" flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl sm:hidden"
              onClick={toggleVisibility}>
              More<MdOutlineUnfoldMore className='mr-1' />
            </button>
          )}
        </div>
        {isVisible && (
          <div className='flex flex-row-reverse mr-4'>
            <div className='flex flex-col'>
              <button className=" flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl">
                <BiTaxi className='mr-1' /> Car rentals
              </button>
              <button className=" flex flex-row items-center bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl">
                <MdOutlineAttractions className='mr-1' /> Attractions
              </button>
            </div>
          </div>
        )}

        <div className='mt-40 px-4 max-w-7xl mx-auto  text-white '>
          <div className='text-5xl max-sm:text-2xl font-extrabold'>Find your next stay</div>
          <div className='text-xl max-sm:text-sm mt-2'>Search low prices on hotels, homes and much more...</div>
        </div>
        <div className='px-4 max-w-7xl mx-auto mt-10'>
          <SearcBar />
        </div>
      </nav>

      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
        theme={customThemeForModal}
      >
        <Modal.Header>
          <h2>More</h2>
        </Modal.Header>
        <Modal.Body>
          <div className='flex flex-col'>
            <div className='flex flex-row my-2'><BiDollarCircle className='mr-2 mt-1 text-lg' />LKR Sri Lankan Rupee</div>
            <div className='flex flex-row my-2'><BsPhone className='mr-2 mt-1 text-lg' />Download the iPhone app</div>
            <div className='flex flex-row my-2'><MdAddHomeWork className='mr-2 mt-1 text-lg' />List your property</div>
            <div className='my-3 font-bold'>Help and support</div>
            <div className='flex flex-row my-2'><AiOutlineQuestionCircle className='mr-2 mt-1 text-lg' />Customer Service help</div>
            <div className='flex flex-row my-2'><FaHandshakeSimple className='mr-2 mt-1 text-lg' />Partner dispute</div>
            <div className='my-3 font-bold'>Settings and legal</div>
            <div className='flex flex-row my-2'><AiOutlineInfoCircle className='mr-2 mt-1 text-lg' />About Booking.com</div>
            <div className='flex flex-rowmy-2'><TbFileInfo className='mr-2 mt-1 text-lg' />Terms and conditions</div>
            <div className='flex flex-row my-2'><GoLaw className='mr-2 mt-1 text-lg' />Legal</div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default Navbar;
