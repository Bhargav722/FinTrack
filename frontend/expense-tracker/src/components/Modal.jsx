import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  // 1. If the modal is not open, return null (render nothing).
  if (!isOpen) return null;

  return (
    // 2. Overlay/Backdrop: Fixed position to cover the entire screen.
    <div
      className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      // Optional: Close modal when clicking on the backdrop
      onClick={onClose}
    >
      {/* 3. Modal Content Container: Stops event propagation so clicking inside doesn't close the modal */}
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-full overflow-y-auto m-4"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-medium text-gray-900">
            {title}
          </h3>

          {/* Close Button (SVG icon based on the partial code) */}
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
          >
            {/* SVG for Close/X icon (common pattern) */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;