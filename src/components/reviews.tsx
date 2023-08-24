'use client';
import React, { useState } from 'react';
import { Button, Modal, Progress } from 'flowbite-react';
import ReviewCard from './reviewCard';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { reviews } from '@/data/availabilityPage';
import Image from "next/image"
import { BiBed, BiTimeFive, BiCalendarAlt, BiLike, BiDislike, BiErrorCircle } from 'react-icons/bi'

const customThemeForModal: CustomFlowbiteTheme['modal'] = {
    content: {
        inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[96vh]',
    },
};

const Reviews = () => {
    const [openModal, setOpenModal] = useState<string | undefined>('default');
    const props = { openModal, setOpenModal };
    const [openModal2, setOpenReviewsWork] = useState<string | undefined>();
    const props2 = { openModal2, setOpenReviewsWork };
    const sumOfRate = reviews.reduce((sum, item) => sum + item.rating, 0);
    const averageOfRate = sumOfRate / reviews.length;

    return (
        <>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}
                position={'top-right'}
                size={'5xl'}
                theme={customThemeForModal}
            >
                <Modal.Header
                >
                    <div className="flex flex-row">
                        <div className="flex gap-3 items-center">
                            <div className="">
                                <div className="w-10 h-10 flex justify-center items-center bg-primary-dark text-white rounded-lg text-sm">
                                    {averageOfRate.toFixed(1)}
                                </div>
                            </div>
                            <div className="">
                                <h2 className="text-base font-semibold">Superb</h2>
                                <p className="text-xs text-gray-500">{reviews.length} reviews</p>
                            </div>
                        </div>
                        <div className='flex flex-row' onClick={() => props2.setOpenReviewsWork('default')}>
                            <p className='font-normal text-sm  ml-5 mt-7 text-[#008009]'> <a href="#" className='hover:underline'>We aim for 100% real reviews</a></p>
                            <BiErrorCircle className='mt-7 ml-1 text-[#008009]'/>
                        </div>
                        <div className='ml-15'>
                            {/* <Button>Write a review</Button> */}
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span className='font-semibold'>Categories:</span>
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
                    </div>

                    <div className='flex flex-col mt-5 border-t-4 border-black-1'>
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
                                            <div className='flex flex-row justify-between'>
                                                <span className='text-xs text-gray-600'>Reviewed : 3 july 2023</span>
                                                <div className="w-10 h-10 flex justify-center items-center bg-primary-dark text-white rounded-lg text-sm">
                                                    {review.rating}
                                                </div>
                                            </div>
                                            <div className="">
                                                <h1 className="text-lg font-semibold mb-2">{review.title}</h1>
                                                <p className="text-md">{review.description}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className='mr-8'>
                                                    <span className='text-xs'><b>1 person </b>found this review helpful.</span>
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

                </Modal.Body>
            </Modal>

            <Modal
                show={props2.openModal2 === 'default'}
                onClose={() => props2.setOpenReviewsWork(undefined)}
                position={'top-center'}
                theme={customThemeForModal}
            >
                <Modal.Header>How guest reviews work</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Each review score is between 1-10. To get the overall score that you see, we add up all the review scores we’ve received and divide that total by the number of review scores we’ve received. In addition, guests can give separate ‘subscores’ in crucial areas,
                            such as location, cleanliness, staff, comfort, facilities, value for money and free Wi-Fi. Note that guests submit their subscores and their overall scores independently, so there’s no direct link between them.
                            You can review an Accommodation that you booked through our Platform if you stayed there or if you arrived at the property but didn’t actually stay there. To edit a review you’ve already submitted, please contact our Customer Service team.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            We have people and automated systems that specialise in detecting fake reviews submitted to our Platform. If we find any, we delete them and, if necessary, take action against whoever is responsible.
                            Anyone else who spots something suspicious can always report it to our Customer Service team, so our Fraud team can investigate.
                            Ideally, we would publish every review we receive, whether positive or negative. However, we won’t display any review that includes or refers to (among other things):
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            We have people and automated systems that specialise in detecting fake reviews submitted to our Platform. If we find any, we delete them and, if necessary, take action against whoever is responsible.
                            Anyone else who spots something suspicious can always report it to our Customer Service team, so our Fraud team can investigate.
                            Ideally, we would publish every review we receive, whether positive or negative. However, we won’t display any review that includes or refers to (among other things):
                        </p>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
};
export default Reviews;