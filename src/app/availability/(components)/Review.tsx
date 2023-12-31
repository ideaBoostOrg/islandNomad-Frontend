import Reviews from "@/components/reviews";
import { reviews } from "@/data/availabilityPage"
import Image from "next/image"
import { useState } from "react";
import { BiBed, BiTimeFive, BiCalendarAlt, BiLike, BiDislike } from 'react-icons/bi'


function Review() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div className="my-12 pt-8 min-h-[300px]">
                <div className="flex sticky top-0 z-[10] bg-white pt-6 border-b pb-4 justify-between item-start">
                    <h1 className="text-2xl font-bold">Guest Reviews</h1>
                    <div className="flex gap-4">
                        <h3 className="row-span-2 px-3 flex justify-center items-center text-white bg-primary-dark rounded-lg">8.0</h3>
                        <div className="flex flex-col">
                            <p className="font-semibold">{'Good'}</p>
                            <p className="text-sm text-gray-700">{10} reviews</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-12">
                    {
                        [{ name: 'Staff', value: 70 }, { name: 'Cleanliness', value: 75 }, { name: 'Comfort', value: 98 }, { name: 'Location', value: 84 }, { name: 'Facilities', value: 25 }, { name: 'Value for money', value: 67 }]
                            .map((category, index) => (
                                <div key={index} className="flex flex-col gap-2 mb-2">
                                    <div className="flex justify-between text-sm">
                                        <p>{category.name}</p>
                                        <p className="font-semibold">{category.value}%</p>
                                    </div>
                                    <div className="w-full h-3 rounded-xl bg-gray-200 overflow-hidden">
                                        <div className="h-full rounded-xl bg-primary-dark" style={{ width: `${category.value}%` }}></div>
                                    </div>
                                </div>
                            ))

                    }
                </div>
                <div className=" p-4">
                    <button
                        className="px-4 py-2 bg-primary-dark text-white rounded-lg"
                        onClick={handleClick}>
                        Read all reviews
                    </button>
                </div>
                <div className="grid lg:grid-cols-4 gap-8 mt-16">
                    <div className="lg:col-span-1">
                        <div className="grow sticky top-[7rem] flex gap-2 flex-col">

                            <h4 className="text-md font-semibold">Sort reviews by:</h4>
                            <div className="flex flex-col mb-8">
                                <select className="text-sm  rounded-lg h-[2.5rem] border border-gray-400">
                                    <option value="any">Any</option>
                                    <option value="most relavent">Most relavent</option>
                                    <option value="newst recent">Newest first</option>
                                    <option value="oldest recent">Oldest first</option>
                                    <option value="highest score">Highest score</option>
                                    <option value="lowest score">Lowest score</option>
                                </select>
                            </div>

                            <h4 className="font-semibold text-md">Filter by:</h4>
                            <div className="flex flex-col mb-2">
                                <label className="text-sm text-gray-700 font-semibold  mb-2" htmlFor="score">Scroes</label>
                                <select className="text-sm  rounded-lg h-[2.5rem] border border-gray-400" id="score">
                                    <option value="all">All</option>
                                    <option value="excellent">Excellent: 9+</option>
                                    <option value="good">Good: 7 - 9</option>
                                    <option value="pleasant">Pleasant: 5 - 7</option>
                                    <option value="avarage">Avarage: 3 - 5</option>
                                    <option value="poor">Poor: 1 - 3</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-2">
                                <label className="text-sm text-gray-700 font-semibold  mb-2" htmlFor="">Type</label>
                                <select className="text-sm  rounded-lg h-[2.5rem] border border-gray-400">
                                    <option value="all">All</option>
                                    <option value="single">Single</option>
                                    <option value="double">Double</option>
                                    <option value="family">Family</option>
                                    <option value="suite">Suite</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-2">
                                <label className="text-sm text-gray-700 font-semibold  mb-2" htmlFor="">Country</label>
                                <select className="text-sm  rounded-lg h-[2.5rem] border border-gray-400">
                                    <option value="all">All</option>
                                    <option value="united states">United States</option>
                                    <option value="canada">Canada</option>
                                    <option value="south korea">South Korea</option>
                                    <option value="australia">Australia</option>
                                    <option value="united kingdom">United Kingdom</option>
                                    <option value="spain">Spain</option>
                                    <option value="china">China</option>
                                    <option value="germany">Germany</option>
                                    <option value="italy">Italy</option>
                                    <option value="sri lanka">Sri Lanka</option>
                                </select>
                            </div>

                            <div className="flex flex-col mb-2">
                                <label className="text-sm text-gray-700 font-semibold  mb-2" htmlFor="">Time Period</label>
                                <select className="text-sm  rounded-lg h-[2.5rem] border border-gray-400">
                                    <option value="all">All</option>
                                    <option value="last week">Last Week</option>
                                    <option value="last month">Last Month</option>
                                    <option value="last 3 months">Last 3 Months</option>
                                    <option value="last 6 months">Last 6 Months</option>
                                    <option value="last year">Last Year</option>
                                    <option value="last 2 year">Last 2 Year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {
                            reviews.map(review => (
                                <div key={review.id} className="flex flex-col lg:flex-row gap-6 border-b-2 p-4 min-h-[150px] mb-6">

                                    <div className="flex justify-between lg:justify-start lg:flex-col lg:gap-3 min-w-[200px] px-4 border-r-2">

                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image width={200} height={200} className="w-full h-full object-cover" src={review?.user?.avatar} alt={review?.user?.name} />
                                            </div>
                                            <div className="">
                                                <h2 className="text-md font-semibold">{review?.user?.name}</h2>
                                                <p className="text-sm text-gray-500">{review?.user?.country}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="flex items-center gap-4 text-sm text-gray-600"><BiBed /> {review?.roomType}</p>
                                            <p className="flex items-center gap-4 text-sm text-gray-600"><BiCalendarAlt /> {review?.date}</p>
                                            <p className="flex items-center gap-4 text-sm text-gray-600"><BiTimeFive /> {review?.duration}</p>
                                        </div>

                                    </div>

                                    <div className="grow flex flex-col justify-between gap-4">
                                        <div className="">
                                            <h1 className="text-lg font-semibold mb-2">{review.title}</h1>
                                            <p className="text-md">{review.description}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="w-10 h-10 flex justify-center items-center bg-primary-dark text-white rounded-lg text-sm">
                                                {review.rating}
                                            </div>
                                            <div className="flex gap-6">
                                                <button className="text-blue-700 font-semibold text-sm flex gap-2 items-center">Helpful <BiLike /></button>
                                                <button className="text-blue-700 font-semibold text-sm flex gap-2 items-center">Not Helpful <BiDislike /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div>
                {visible && <Reviews />}
            </div>
        </>
    )
}

export default Review