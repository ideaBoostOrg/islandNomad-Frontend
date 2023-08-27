import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'
import { BiCalendarAlt, BiCheckCircle, BiCopy, BiDownload, BiPrinter } from 'react-icons/bi'

function ConfirmationPage() {
    return (
        <Container style={{ marginTop: '2rem' }}>
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">

                {/* left */}
                <div className="lg:col-span-2">
                    <h1 className='text-3xl text-center lg:text-left font-bold mt-3 mb-10 text-gray-800 flex items-center gap-2'><BiCheckCircle className='text-emerald-500' /> Your booking is confirmed.</h1>
                    <div className="lg:hidden bg-emerald-100 p-4 border rounded-lg border-emerald-700 text-center mb-4">
                        <p className='text-sm mb-2'>Cofirmation Number</p>
                        <p className='text-lg font-semibold flex justify-center items-center'>
                            123456789
                            <span className='text-sm ml-2 font-normal hover:cursor-pointer hover:bg-emerald-200 p-1 rounded-full'><BiCopy /></span>
                        </p>
                    </div>

                    <div className="">
                        <h1 className='text-xl font-bold mb-4 text-gray-800'>The Grand Hill</h1>

                        <div className="flex gap-4">
                            <div className="flex grow items-center gap-3 mb-6 border p-4 rounded-lg shadow">
                                <BiCalendarAlt className="text-2xl" />
                                <div className=" px-2">
                                    <p className="text-sm text-gray-500">Check in</p>
                                    <p className="font-semibold text-base ">Mon, 20 Sep 2023</p>
                                    <p>08:00 am</p>
                                </div>
                            </div>
                            <div className="flex grow items-center gap-3 mb-6 border p-4 rounded-lg shadow">
                                <BiCalendarAlt className="text-2xl" />
                                <div className=" px-2">
                                    <p className="text-sm text-gray-500">Check out</p>
                                    <p className="font-semibold text-base ">Mon, 22 Sep 2023</p>
                                    <p>08:00 am</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-col lg:flex-row my-4">
                            <div className="border lg:border-0 p-4 rounded-lg grow">
                                <p className="text-sm font-bold mb-3">Contact Property</p>
                                <div className=" flex gap-2">
                                    <p>Phone:</p>
                                    <Link href='tel:'>123456789</Link>
                                </div>
                                <div className="">
                                    <Link href="mailTo:" className='text-sm text-blue-500 underline underline-offset-4'>Send an email</Link>
                                </div>
                            </div>
                            <div className="border lg:border-0 p-4 rounded-lg grow">
                                <p className='text-sm font-bold mb-3'>Address</p>
                                <p>1234 Main St, San Francisco CA 94102</p>
                            </div>

                            <div className="border lg:border-0 p-4 rounded-lg grow">
                                <p className='text-sm font-bold mb-3'>Booking Details</p>
                                <p>2 Adults, 1 Room</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <button className="px-4 py-2 flex items-center gap-3 grow lg:grow-0 shadow text-[12px] lg:text-sm rounded-lg bg-primary-dark text-white"><BiDownload /> Download Confirmation</button>
                        <button className="px-4 py-2 flex items-center gap-3 grow lg:grow-0 shadow text-[12px] lg:text-sm rounded-lg bg-primary-dark text-white"><BiPrinter /> Print Confirmation</button>
                    </div>

                    <div className="my-8 pt-4 border-t">
                        <h1 className="text-xl font-bold mb-6">Your Seat Details</h1>
                        <div className="">
                            <div className="flex flex-col lg:flex-row gap-2 mb-6">
                                <p className='min-w-[200px] font-semibold text-sm'>Guest name</p>
                                <p>John Doe</p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 v mb-6">
                                <p className='min-w-[200px] font-semibold text-sm mb-2'>Your stay include</p>
                                <div className=" flex flex-wrap gap-2">

                                    {
                                        ['2 swimming pools', 'Non-smoking rooms', 'Airport shuttle', 'Free WiFi', 'Room service', 'Family rooms', 'Free parking', 'Restaurant', '24-hour front desk', 'Breakfast']
                                            .map((item, index) => (
                                                <div key={index} className="border border-primary-dark px-3 py-1 rounded-2xl">
                                                    <p className="text-[13px]">{item}</p>
                                                </div>
                                            ))
                                    }

                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 mb-6">
                                <p className='min-w-[200px] font-semibold text-sm'>Meal plan</p>
                                <p>There is no meal plan available</p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 mb-6">
                                <p className='min-w-[200px] font-semibold text-sm'>Prepayment</p>
                                <p>No prepayment is needed</p>
                            </div>
                        </div>

                        <div className="my-10 pt-4 border-t">
                            <div className="flex justify-between items-center my-4">
                                <p>1 Seat</p>
                                <p>USD 15.99</p>
                            </div>
                            <div className="flex justify-between items-center my-4">
                                <p className='text-lg text-blue-600 '>Price <span></span></p>
                                <p className='text-lg text-blue-600 '><span className="text-[12px] lg:text-sm mr-2">approx.</span>USD 15.99</p>
                            </div>
                            <div className="mb-3">
                                <p className='font-semibold mb-1'>Additional charges</p>
                                <p className='text-sm text-gray-500 mb-3'>The price you see below is an approximate that may include fees based on the maximum occupancy. This can
                                    include taxes set by local governments or charges set by the property.</p>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-sm">VAT (11.0%)</p>
                                    <p>USD 1.79</p>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-sm">City tax (1.0%)</p>
                                    <p>USD 0.18</p>
                                </div>
                                <div className="flex justify-between items-center my- pt-4 border-t">
                                    <p className='text-xl font-semibold flex flex-col lg:flex-row lg:gap-2 text-blue-600'>Final Price <span className='text-[12px] lg:text-sm'>(tax included)</span></p>
                                    <p className='text-xl font-semibold text-blue-600'><span className='text-[12px] lg:text-sm mr-2'>approx.</span>USD 15.99</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                {/* right */}
                <div className="hidden lg:block">
                    <div className="sticky top-14">
                        <div className="bg-emerald-100 p-4 border rounded-lg border-emerald-700 text-center mb-4">
                            <p className='text-sm mb-2'>Cofirmation Number</p>
                            <p className='text-lg font-semibold flex justify-center items-center'>
                                123456789
                                <span className='text-sm ml-2 font-normal hover:cursor-pointer hover:bg-emerald-200 p-1 rounded-full'><BiCopy /></span>
                            </p>
                        </div>
                        <div className="flex flex-col border rounded-lg py-4 px-6">
                            <p className='text-sm font-semibold mb-1'>Is everything correct?</p>
                            <p className='text-sm text-gray-700 mb-3 break-words'>You can cancel your booking 5 days before check-in date.</p>
                            <Link href="/" className='text-sm text-blue-600 font-semibold underline underline-offset-4 mb-2'>Cancel your booking</Link>
                            <Link href="/" className='text-sm text-blue-600 font-semibold underline underline-offset-4'>View booking</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ConfirmationPage