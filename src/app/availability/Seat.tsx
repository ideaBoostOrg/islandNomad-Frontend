/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container"
import { images } from "@/data/availabilityPage"
import Link from "next/link"
import Image from "next/image"
import Review from "./(components)/Review"
import AvailabilityTable from "./(components)/AvailabilityTable"


function HotelPage() {
    return (
        <Container>

            <div className="grid my-8 lg:grid-cols-4 gap-10">

                <div className="hidden lg:flex flex-col gap-4">
                    <div className="grow bg-yellow-300 rounded-lg flex gap-2 flex-col p-4">
                        <h4 className="font-semibold text-lg">Search</h4>
                        <div className="flex flex-col mb-2">
                            <label className="text-sm  mb-1" htmlFor="">Location</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-sm  mb-1" htmlFor="">Check-in date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-sm  mb-1" htmlFor="">Check-out date</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="flex flex-col mb-2">
                            <button className="bg-primary-dark text-white py-2 mt-2">Search</button>
                        </div>

                    </div>
                    <div className="bg-red-300 rounded-lg overflow-hidden">
                        <iframe width="100%" height="" src="https://maps.google.com/maps?q=&output=embed&fullscreen=true&zoom=20" frameBorder="0"></iframe>
                    </div>
                </div>

                <div className=" lg:col-span-3">
                    <div className="">
                        <h3 className="text-2xl font-bold mb-1">The Grand Hill - Seats</h3>
                        <p className="text-sm text-gray-600">The Grand Hills, No. A 240 / 169 Springhill Estate, Bowala, Kandy, 20000 Kandy</p>
                        <Link href="#" className="text-sm text-blue-600 font-semibold">Show on map</Link>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-6 gap-2 mt-4 rounded-lg overflow-hidden ">
                        {
                            images.map((img, index) => (
                                <div key={index} className={` overflow-hidden 
                                ${index === 0 || index === 2 ? ' h-[150px] col-span-2 row-span-2' :
                                        index === 1 ? ' h-[310px] col-span-3 row-span-4' :
                                            'h-[150px] row-span-2'
                                    }`}>
                                    <Image width={1920} height={1080} className="w-full h-full object-cover" key={index} src={img} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="my-12 min-h-[300px] grid lg:grid-cols-4 gap-8 lg:gap-16">
                <div className="lg:col-span-3">
                    <p className="text-sm text-justify lg:text-left  ">You're eligible for a Genius discount at The Grand Hills! To save at this property, all you have to do is sign inSet within 4.4 km of Ceylon Tea Museum and 5.6 km of Kandy Royal Botanic Gardens in Kandy, The Grand Hills features accommodation with seating area. This bed and breakfast features a private pool, a garden and free private parking. The accommodation offers free WiFi throughout the property, as well as a terrace and a family-friendly restaurant.
                        <br></br><br></br>The bed and breakfast will provide guests with air-conditioned units with a desk, a kettle, a safety deposit box, a flat-screen TV, a patio and a private bathroom with a bidet. Some units feature a private entrance. At the bed and breakfast, the units are equipped with bed linen and towels.
                        <br></br><br></br> Continental and American breakfast options with warm dishes, pancakes and fruits are available every morning at the bed and breakfast.
                        <br></br><br></br> The area is popular for walking tours, and bike hire and car hire are available at The Grand Hills. Guests can also relax in the shared lounge area. Kandy railway station is 5.9 km from the accommodation, while Bogambara Stadium is 6.6 km away. The nearest airport is Katugastota Polgolla Reservoir Seaplane Base, 11 km from The Grand Hills, and the property offers a paid airport shuttle service.
                        <br></br><br></br>Couples particularly like the location — they rated it 9.3 for a two-person trip.</p>
                </div>
                <div className="bg-primary-dark rounded-lg p-4">
                    <h2 className="font-semibold mb-4 text-white">Popular facilities</h2>
                    <div className="flex flex-wrap gap-3">
                        {
                            ['2 swimming pools', 'Non-smoking rooms', 'Airport shuttle', 'Free WiFi', 'Room service', 'Family rooms', 'Free parking', 'Restaurant', '24-hour front desk', 'Breakfast']
                                .map((item, index) => (
                                    <div key={index} className="border  text-white border-white px-2 py-1 rounded-2xl">
                                        <p className="text-sm">{item}</p>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>

            <AvailabilityTable />
            <Review />

        </Container>
    )
}

export default HotelPage