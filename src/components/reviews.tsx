'use client';
import React, { useState } from 'react';
import { Button, Modal, Progress } from 'flowbite-react';
import ReviewCard from './reviewCard';

const Reviews = () => {
    const [openModal, setOpenModal] = useState<string | undefined>('default');
    const props = { openModal, setOpenModal };
    const [openModal2, setOpenReviewsWork] = useState<string | undefined>();
    const props2 = { openModal2, setOpenReviewsWork };

    return (
        <>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}
                position={'top-right'}
                size={'5xl'}
            >
                <Modal.Header
                >
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <div>
                                <svg
                                    className="w-10 h-10 text-[#187B92]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    <text x="50%" y="60%" textAnchor="middle" fill="white" fontSize="6">
                                        4.5
                                    </text>
                                </svg>
                            </div>
                            <div className="flex flex-col mt-2">
                                <h5 className="text-base font-bold">Superb</h5>
                                <h6 className="text-xs" >456 reviews</h6>
                            </div>
                        </div>
                        <div className='flex flex-row' onClick={() => props2.setOpenReviewsWork('default')}>
                            <p className='font-normal text-sm  ml-5 mt-7 text-[#187B92]'> <a href="#" className='hover:underline'>We aim for 100% real reviews</a></p>
                            <svg className="w-4 h-4 text-gray-800 dark:text-white mt-7 mx-1 cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                        </div>
                        <div className='ml-15'>
                            {/* <Button>Write a review</Button> */}
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span className='font-semibold'>Categories:</span>
                        <div className='flex flex-col'>
                            <div className="flex flex-row w-full">
                                <div className='w-1/3 mx-1'>
                                    <Progress
                                        labelProgress
                                        labelText
                                        progress={50}
                                        size="lg"
                                        textLabel="Staff"
                                        textLabelPosition="outside"
                                    />
                                </div>
                                <div className='w-1/3 mx-1'>
                                    <Progress
                                        labelProgress
                                        labelText
                                        progress={50}
                                        size="lg"
                                        textLabel="Facilities"
                                        textLabelPosition="outside"
                                    />
                                </div>
                                <div className='w-1/3 mx-1'>
                                    <Progress
                                        labelProgress
                                        labelText
                                        progress={50}
                                        size="lg"
                                        textLabel="Cleanliness"
                                        textLabelPosition="outside"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row w-full mt-8">
                                <div className='w-1/3 mx-1'>
                                    <Progress
                                        labelProgress
                                        labelText
                                        progress={50}
                                        size="lg"
                                        textLabel="Comfort"
                                        textLabelPosition="outside"
                                    />
                                </div>
                                <div className='w-1/3 mx-1'>
                                    <Progress
                                        labelProgress
                                        labelText
                                        progress={90}
                                        size="lg"
                                        textLabel="Value for money"
                                        textLabelPosition="outside"
                                    />
                                </div>
                                <div className='w-1/3 mx-1'>
                                    <Progress
                                        labelProgress
                                        labelText
                                        progress={50}
                                        size="lg"
                                        textLabel="Location"
                                        textLabelPosition="outside"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-5 border-t-4 border-black-1'>
                        {Array.from({ length: 2 }, (_, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <ReviewCard />
                        ))}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
                    <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
            show={props2.openModal2 === 'default'} 
            onClose={() => props2.setOpenReviewsWork(undefined)}
                position={'top-center'}
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