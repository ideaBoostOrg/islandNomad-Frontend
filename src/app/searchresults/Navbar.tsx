'use client';

import { Navbar, Avatar, Button } from 'flowbite-react';

export default function NavbarWithDropdown() {
    return (
        <Navbar
            fluid
            className="bg-navbar-background dark:bg-gray-800 shadow-md text-white"
        >
            <div className='flex flex-col'>
                <Navbar.Brand href="./..">
                    <span className="self-center whitespace-nowrap text-md font-semibold text-white ">
                        Island Nomad
                    </span>
                </Navbar.Brand>
                <div className='flex flex-row justify-between my-2 w-52'>
                    <Button
                        pill
                        color="gray"
                    >
                        Spots
                    </Button>
                    <Button
                        pill
                        color="gray"
                    >
                        Bedrooms
                    </Button>
                </div>
            </div>

            <Navbar.Collapse>
                <Navbar.Link
                    href="#"
                    className='text-white'
                >
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-white'
                >
                    List your property
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-black bg-white rounded-sm md:px-2 md:py-1'
                >
                    Register
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-black bg-white rounded-sm md:px-2 md:py-1'

                >
                    Sign in
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


