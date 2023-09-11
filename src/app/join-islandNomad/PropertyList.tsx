/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container"
import { Button, CustomFlowbiteTheme, Toast } from 'flowbite-react';
import { useState } from "react";
import { FaHome, FaBuilding, FaHotel, FaTree } from 'react-icons/fa';
import { BsHousesFill } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";

function PropertyList() {
    const cardsDetails = [
        {
            icon: 'FaBuilding',
            title: 'Apartment',
            description: 'Furnished and self-catering accommodation, where guests rent the entire place.',
        },
        {
            icon: 'FaHome',
            title: 'Houses',
            description: 'Properties like apartments, holiday homes, villas, etc.',
        },
        {
            icon: 'FaHotel',
            title: 'Hotel, B&Bs, and more',
            description: 'Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.',
        },
        {
            icon: 'FaTree',
            title: 'Alternative places',
            description: 'Properties like boats, campsites, luxury tents, etc.',
        },
    ]

    const customThemeForToast: CustomFlowbiteTheme['toast'] = {
        root: {
            base: "flex w-full max-w-xs items-center border-solid border-2 bg-[#12353d2e] p-4 text-black shadow dark:bg-gray-800 dark:text-gray-400",
        },
    };

    const [isPropertyListVisible, setPropertyListVisible] = useState(true);
    const handleListPropertyClick = () => {
        setPropertyListVisible(false);
    };
    return (
        <Container>
            <div className="flex flex-col">
                {isPropertyListVisible && (
                    <div className="">
                        <div className="font-normal text-xl mt-5">
                            List your property on IslandNomad and start welcoming guests in no time!
                        </div>
                        <div className="text-base mt-3">
                            To get started, choose the type of property you want to list on IslandNomad
                        </div>
                        <div className="flex flex-row mt-10">
                            {cardsDetails.map((card, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <div className={`flex flex-col justify-between w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${card.title === 'Apartment' ? 'mr-10' : ''}`}>
                                    <div>
                                        {card.icon === 'FaHome' && <FaHome className="m-auto text-8xl" />}
                                        {card.icon === 'FaBuilding' && <FaBuilding className="m-auto text-8xl" />}
                                        {card.icon === 'FaHotel' && <FaHotel className="m-auto text-8xl" />}
                                        {card.icon === 'FaTree' && <FaTree className="m-auto text-8xl" />}
                                    </div>
                                    <div>
                                        <h5 className="mb-2 mt-3 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                                            {card.title}
                                        </h5>
                                    </div>
                                    <div>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-15">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div className="">
                                        <button className="px-4 py-2 w-full bg-primary-dark text-white rounded-sm"
                                            onClick={handleListPropertyClick}>
                                            List your property
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                )}
                {!isPropertyListVisible && (

                    <div className="flex flex-col mt-5 w-1/2">
                        <div className=" text-xl">How many hotels are you listing?</div>
                        <div className="mt-5">
                            <div className="flex flex-col justify-between w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex flex-row justify-between w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div><FaHome className="text-6xl" /></div>
                                    <div><p>One hotel with one or multiple rooms that guests can book</p></div>
                                </div>
                                <div className="flex flex-row justify-between w-full p-6 mt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div><BsHousesFill className="text-6xl mr-2" /></div>
                                    <div><p>Multiple hotels with one or multiple rooms that guests can book</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-start flex gap-2 mt-10">
                            <button className="px-4 py-2 w-1/6 bg-primary-dark text-white rounded-sm text-2xl">
                                <MdArrowBackIosNew/>
                            </button>
                            <button className="px-4 py-2 w-full bg-primary-dark text-white rounded-sm">
                                Continue
                            </button>
                        </div>
                    </div>
                )}
                <div className="mt-10">
                    <Toast className="fixed bottom-2 right-2 p-4" theme={customThemeForToast}>
                        <div className="flex items-start">
                            <div className="ml-3 text-sm font-normal">
                                <div className="mb-2 text-sm font-normal">
                                    Is there anything preventing you from completing your registration at this point?
                                </div>
                                <div className="flex-start flex gap-2">
                                    <div className="w-1/2">
                                        <button className="px-4 py-2 w-full bg-primary-dark text-white rounded-sm">Let us know</button>
                                    </div>
                                </div>
                            </div>
                            <Toast.Toggle />
                        </div>
                    </Toast>
                </div>
            </div>

        </Container>
    )
}

export default PropertyList