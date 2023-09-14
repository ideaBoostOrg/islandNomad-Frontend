/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container"
import { Button, CustomFlowbiteTheme, Dropdown, Toast } from 'flowbite-react';
import { useState } from "react";
import { FaHome, FaBuilding, FaHotel, FaTree, FaCheckCircle } from 'react-icons/fa';
import { BsHousesFill } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";

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

    const hotelAndMoreProperties = [
        {
            title: 'Hotel',
            description: 'Accommodation for travellers often offering restaurants, meeting rooms and other guest services'
        },
        {
            title: 'Guest house',
            description: 'Private home with separate living facilities for host and guest'
        },
        {
            title: 'Bed and breakfast',
            description: 'Private home offering overnight stays and breakfast'
        },
        {
            title: 'Homestay',
            description: 'A shared home where the guest has a private room and the host lives and is on site. Some facilities are shared between hosts and guests.'
        },
        {
            title: 'Hostel',
            description: 'Budget accommodation with mostly dorm-style bedding and a social atmosphere'
        },
        {
            title: 'Aparthotel',
            description: 'A self-catering apartment with some hotel facilities like a reception desk'
        },
        {
            title: 'Capsule hotel',
            description: 'Extremely small units or capsules offering cheap and basic overnight accommodation'
        },
        {
            title: 'Country house',
            description: 'Private home with simple accommodation in the countryside'
        },
        {
            title: 'Farm stay',
            description: 'Private farm with simple accommodation'
        }
    ]

    const customThemeForToast: CustomFlowbiteTheme['toast'] = {
        root: {
            base: "flex w-full max-w-xs items-center border-solid border-2 bg-[#12353d2e] p-4 text-black shadow dark:bg-gray-800 dark:text-gray-400",
        },
    };
    const iconStyle: React.CSSProperties = {
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        width: '20px',
    };

    const [isPropertyListVisible1, setPropertyListVisible1] = useState(true);
    const handleListPropertyClick1 = (action: string) => {
        if (action === 'Hotel, B&Bs, and more') {
            setPropertyListVisible1(false);
            setPropertyListVisible3(true);
        }
        else {
            setPropertyListVisible1(false);
            setPropertyListVisible2(true);
        }
    };
    const [isPropertyListVisible2, setPropertyListVisible2] = useState(false);
    const handleListPropertyClick2 = (action: string) => {
        if (action === 'back') {
            setPropertyListVisible2(false);
            setPropertyListVisible1(true);

        }
        if (action === 'Continue') {
            setPropertyListVisible4(true);
            setPropertyListVisible2(false);

        }
    };
    const [isPropertyListVisible3, setPropertyListVisible3] = useState(false);
    const handleListPropertyClick3 = (action: string) => {
        if(action === 'back') {
            setPropertyListVisible3(false);
            setPropertyListVisible1(true);

        }
        if(action === 'Continue')   {
            setPropertyListVisible3(false);
            setPropertyListVisible2(true);
        }
    };

    const [isPropertyListVisible4, setPropertyListVisible4] = useState(false);
    const handleListPropertyClick4 = () => {
        setPropertyListVisible4(false);
        setPropertyListVisible5(true);
    };
    const [isPropertyListVisible5, setPropertyListVisible5] = useState(false);
    const handleListPropertyClick5 = (action: string) => {
        if (action === 'back') {
            setPropertyListVisible5(false);
            setPropertyListVisible4(true);
        }
    };

    const [checkMark, setCheckMark] = useState(true);
    const selectListProperty = (value: boolean | ((prevState: boolean) => boolean)) => {
        setCheckMark(value);
    };
    return (
        <Container>
            {/* propertyListContainer1 */}
            <div className="flex flex-col">
                {isPropertyListVisible1 && (
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
                                            onClick={() => handleListPropertyClick1(card.title)}>
                                            List your property
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                )}

                {/* propertyListContainer2 */}
                {isPropertyListVisible2 && (
                    <div className="flex flex-col mt-5 w-1/2">
                        <div className=" text-xl">How many hotels are you listing?</div>
                        <div className="mt-5">
                            <div className="flex flex-col justify-between w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                <div
                                    className={`flex flex-row justify-between w-full p-6 bg-white cursor-pointer ${checkMark ? 'border-2 border-blue-500' : 'border-2 border-gray-200'} shadow dark:bg-gray-800 dark:border-gray-700`}
                                    style={{ position: 'relative' }}
                                    onClick={() => selectListProperty(true)}>
                                    {(checkMark &&
                                        <FaCheckCircle style={iconStyle} className="text-xl text-blue-500" />
                                    )}
                                    <div><FaHome className="text-6xl" /></div>
                                    <div><p>One hotel with one or multiple rooms that guests can book</p></div>
                                </div>
                                <div
                                    className={`flex flex-row justify-between w-full p-6 mt-5 bg-white cursor-pointer ${!checkMark ? 'border-2 border-blue-500' : 'border-2 border-gray-200'} shadow dark:bg-gray-800 dark:border-gray-700`}
                                    style={{ position: 'relative' }}
                                    onClick={() => selectListProperty(false)}>
                                    {(!checkMark &&
                                        <FaCheckCircle style={iconStyle} className="text-xl text-blue-500" />
                                    )}
                                    <div><BsHousesFill className="text-6xl mr-2" /></div>
                                    <div><p>Multiple hotels with one or multiple rooms that guests can book</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-start flex gap-2 mt-10">
                            <button className="px-4 py-2 w-1/6 bg-primary-dark text-white rounded-sm text-2xl"
                                onClick={() => handleListPropertyClick2('back')}>
                                <MdArrowBackIosNew />
                            </button>
                            <button className="px-4 py-2 w-full bg-primary-dark text-white rounded-sm"
                                onClick={() => handleListPropertyClick2('Continue')}>
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* propertyListContainer3 */}
                {(isPropertyListVisible3 &&
                    <div className="flex flex-col mt-5 w-5/6">
                        <div className=" text-xl">From the list below, which property category is most similar to your place?</div>
                        <div className="mt-5">
                            <div className="mt-5 grid grid-cols-3 gap-4 p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                {hotelAndMoreProperties.map((property, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col p-6 bg-white cursor-pointer ${checkMark ? "border-2 border-blue-500" : "border-2 border-gray-200"} shadow dark:bg-gray-800 dark:border-gray-700`}
                                        style={{ position: "relative" }}
                                        onClick={() => selectListProperty(false)}
                                    >
                                        {checkMark && (
                                            <FaCheckCircle
                                                style={iconStyle}
                                                className="text-xl text-blue-500" />
                                        )}
                                        <div className="mb-2 mt-3 text-base font-bold tracking-tight text-gray-900 dark:text-white">{property.title}</div>
                                        <div>
                                            <p className="font-normal text-gray-700 dark:text-gray-400 ">{property.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-start flex gap-2 mt-10">
                            <button className="px-4 py-2 w-1/6 bg-primary-dark text-white rounded-sm text-2xl"
                            onClick={()=>handleListPropertyClick3('back')}>
                                <MdArrowBackIosNew />
                            </button>
                            <button className="px-4 py-2 w-full bg-primary-dark text-white rounded-sm" 
                            onClick={()=>handleListPropertyClick3('Continue')}>
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* propertyListContainer4 */}
                {(isPropertyListVisible4 &&
                    <div className="flex flex-row">
                        <div className="flex flex-col mt-5 w-1/2">
                            <div className=" text-xl">Where is the property you're listing?</div>
                            <div className="mt-5">
                                <div className="flex flex-col justify-between w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <label className="font-semibold">Country/region</label>
                                        <select className="w-full mt-2" name="country" id="country">
                                            <option value="">Sri lanka</option>
                                            <option value="xa">Abkhazia</option>
                                            <option value="af">Afghanistan</option>
                                            <option value="al">Albania</option>
                                            <option value="dz">Algeria</option>
                                            <option value="as">American Samoa</option>
                                        </select>
                                    </div>
                                    <div className="mt-5">
                                        <label className="font-semibold">Country/region</label>
                                        <input type="text" placeholder="Start typing your address" className="w-full mt-2"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-start flex gap-2 mt-10">
                                <button className="px-4 py-2 w-full bg-primary-dark text-white rounded-sm"
                                    onClick={handleListPropertyClick4}>
                                    Continue
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col ml-4">
                            <div className="mt-16">
                                <Toast className="">
                                    <div className="flex items-start">
                                        <div className="ml-3 text-sm font-normal">
                                            <div className="flex flex-row">
                                                <BiLike className="text-2xl mr-1" />
                                                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                                                    What needs to be included in my address?
                                                </span>
                                            </div>

                                            <div className="mb-2 mt-2 text-sm font-normal">
                                                <ul style={{ listStyleType: 'disc', color: 'black' }}>
                                                    <li>Include both your street name and number for the entire property</li>
                                                    <li>The floor number in address line 2 where relevant</li>
                                                    <li>Individual apartment or floor numbers can be shared later</li>
                                                    <li>Provide the post/zip code</li>
                                                    <li>Correctly spell the street name</li>
                                                    <li>Use the physical address of the property, not your office or home address</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Toast.Toggle />
                                    </div>
                                </Toast>
                            </div>
                            <div className="mt-4">
                                <Toast className="">
                                    <div className="flex items-start">
                                        <div className="ml-3 text-sm font-normal">
                                            <div className="flex flex-row">
                                                <HiOutlineLightBulb className="text-2xl mr-1" />
                                                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Why do I need to add my address?
                                                </span>
                                            </div>
                                            <div className="mb-2 mt-2 text-sm font-normal">
                                                Once a guest books your property, this is the address that will be shared with them. It's important that it is correct so that guests can easily find your property.
                                            </div>
                                        </div>
                                        <Toast.Toggle />
                                    </div>
                                </Toast>
                            </div>
                        </div>
                    </div>
                )}

                {/* propertyListContainer5 */}
                {(isPropertyListVisible5 &&
                    <div className="flex flex-col mt-5 w-1/2">
                        <div className=" text-xl">Pin the location of your property</div>
                        <div className="mt-5">
                            <div className="flex flex-col justify-between w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <p className="font-normal text-gray-700 dark:text-gray-400 ">This is the location we'll show to guests on our site. Drag the map so the pin matches the exact location of your place. </p>
                                </div>
                                <div className="mt-2">
                                    <iframe width="100%" height="350px" src="https://maps.google.com/maps?q=<?php echo $gig['addressLine1'] . ', ' . $gig['addressLine2'] . ', ' . $gig['city'] . ', ' . $gig['district'] ?>&output=embed&fullscreen=true&zoom=20"></iframe>

                                </div>
                            </div>
                        </div>
                        <div className="flex-start flex gap-2 mt-10">
                            <button className="px-4 py-2 w-1/6 bg-primary-dark text-white rounded-sm text-2xl"
                                onClick={() => handleListPropertyClick5('back')}>
                                <MdArrowBackIosNew />
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