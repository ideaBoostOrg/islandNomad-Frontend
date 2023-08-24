'use client'
import { useRouter } from "next/navigation"

function AvailabilityTable() {

    const router = useRouter()

    return (
        <>
            <div className="flex sticky top-0 z-[10] bg-white pt-6 border-b pb-4 justify-between item-start">
                <h1 className="text-2xl font-bold">Availability</h1>
                {/* <div className="flex gap-4">
                    <h3 className="row-span-2 px-3 flex justify-center items-center text-white bg-primary-dark rounded-lg">8.0</h3>
                    <div className="flex flex-col">
                        <p className="font-semibold">{'Good'}</p>
                        <p className="text-sm text-gray-700">{10} reviews</p>
                    </div>
                </div> */}
            </div>

            <div className="">
                <div className="grid grid-cols-3">
                    <div className="">Availability table content goes here</div>
                    <div className="">b</div>
                    <div className=" p-4">
                        <button
                            className="px-4 py-2 bg-primary-dark text-white rounded-lg"
                            onClick={
                                () => {
                                    // setModalOpen(true)
                                    router.push('/checkout')
                                }
                            }
                        >Reserve</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AvailabilityTable