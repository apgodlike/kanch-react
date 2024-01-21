import React, { useState } from "react";

const ExpandableImage = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div className="flex max-w-lg max-h-96">
        <img
          src={src}
          alt={alt}
          onClick={toggleExpand}
          className="cursor-pointer"
        />
      </div>

      {isExpanded && (
        <div
          onClick={toggleExpand}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10"
        >
          <img src={src} alt={alt} className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default ExpandableImage;
