'use client'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import { use, useState } from 'react'
import Container from "@/components/Container"
import HotelTab from "./Hotel"
import SeatTab from "./Seat"

function AvailabilityPage() {

    const [tab, setTab] = useState(0)

    const changeTab = () => {
        setTab(tab === 0 ? 1 : 0)
    }

    return (
        <>
            <Container>

                <Breadcrumb className='mt-6' aria-label="Default breadcrumb example">
                    <Breadcrumb.Item
                        href="#"
                        icon={HiHome}
                    >
                        <p>
                            Home
                        </p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Kandy
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        The Grand Hill
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className="flex gap-2 mb-4 mt-8">
                    <button
                        className={`px-4 py-2 flex-grow text-blue-600 font-semibold bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out 
                        ${tab === 0 ? 'bg-blue-600 text-white' : ''}
                        `}
                        onClick={changeTab}
                    >Seats</button>
                    <button
                        className={`px-4 py-2 flex-grow text-blue-600 font-semibold bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out 
                        ${tab === 1 ? 'bg-blue-600 text-white' : ''}
                        `}
                        onClick={changeTab}
                    >Bedrooms</button>
                    {/* <button className="px-4 py-2 text-blue-600 font-semibold bg-blue-100 w-[200px]">Info</button> */}
                    {/* <button className="px-4 py-2 text-blue-600 font-semibold bg-blue-100 w-[200px]">Reviews</button> */}
                </div>
            </Container>
            {
                tab === 0 ? <SeatTab /> : <HotelTab />
            }

        </>
    )
}

export default AvailabilityPage