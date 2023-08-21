// 'use client';

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
import '../styles/custom-styles.scss'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 h-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-semibold text-xl mt-5 ml-2">IslandNomad</div>
            <div className="mr-2 flex space-x-2 lg:space-x-4 lg:ml-auto mt-5 sm:mr-2">
              <button className="bg-white hover:bg-gray-500 text-black px-4 py-2 rounded text-sm lg:text-base">
                Register
              </button>
              <button className="bg-white hover:bg-gray-500 text-black px-4 py-2 rounded text-sm lg:text-base">
                Sign in
              </button>
            </div>
        </div>
        <div className="custom-margin-left ml-10 flex space-x-2 sm:ml-0">
            <button className="bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl border border-white">
              Spots
            </button>
            <button className="bg-transparent transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white px-4 py-2 rounded text-sm lg:text-base rounded-3xl border border-white">
              Bedrooms
            </button>
        </div>
        
      </nav>
    );
  };
  
  export default Navbar;
  