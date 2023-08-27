'use client'
import React from 'react';

interface HeadingComponentProps {
    headingText: string;
  }

  const HeadingComponent: React.FC<HeadingComponentProps> = ({ headingText }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-left sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mt-3">
        {headingText}
      </h2>
    </div>
  )
}

export default HeadingComponent