import React from 'react';

const FilterCard = (props:any) => {

    const headingGroupName = props.headingGroupName;
    const checkBoxDetails = props.checkBoxDetails;

    return (
        <div className="flex flex-col border-solid border-2 border-gray p-4">
            <h4 className="font-bold text-slate-900 mb-4">{headingGroupName}</h4>
            <ul className="w-h-full text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white">
                {checkBoxDetails.map((checkBox:any, index:any) => (
                    <li key={index} className="w-full">
                        <div className="flex items-center pl-3">
                            <input
                                id={`vue-checkbox-${index}`}
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-[#187B92] bg-gray-100 border-gray-300 rounded focus:ring-[#5C7177] dark:focus:ring-[#187B92] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                htmlFor={`vue-checkbox-${index}`}
                                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                {checkBox.label}
                            </label>
                            <label className="ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {checkBox.value}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>


    )
};
export default FilterCard;