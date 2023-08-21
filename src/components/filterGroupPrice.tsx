import React from 'react';

const FilterGroupPrice = () => {

    return (
        <div className="flex flex-col border-solid border-2 border-gray p-4">
            <h4 className="font-bold text-slate-900 mb-4">Your Budget (per night)</h4>
            <h6 className='text-sm font-medium text-gray-900 dark:text-gray-300 mb-4'>LKR 2,000 - LKR 50,000+</h6>
            <input
                id="default-range"
                type="range"
                className="w-full h-2 my-4 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 ring-[#187B92]"
            />
        </div>
        
    )
};
export default FilterGroupPrice;