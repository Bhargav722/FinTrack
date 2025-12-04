import React, { useState } from 'react';
// Assuming 'EmojiPicker' comes from the installed library 'emoji-picker-react'
import EmojiPicker from "emoji-picker-react";
// Assuming 'LuImage' and 'LuX' are imported from 'react-icons/lu'
import { LuImage, LuX } from "react-icons/lu";

// Props: { icon } is the currently selected emoji/icon, { onSelect } handles the selection
const EmojiPickerPopup = ({ icon, onSelect }) => {
  // State to manage whether the actual emoji picker is visible
  const [isOpen, setIsOpen] = useState(false);

  // Handler to capture the selected emoji and close the picker
  const handleEmojiSelect = (emojiData) => {
    // Note: The specific property (e.g., 'emoji') depends on the library used.
    // Assuming the library provides an object with a 'emoji' key for the string.
    onSelect(emojiData.emoji);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Clickable area to open the picker */}
      <div 
        className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
        onClick={() => setIsOpen(true)}
      >
        {/* Display the current icon or a default placeholder */}
        <div className="text-2xl">
          {icon ? (
            // If the icon is an image path (less common for emojis)
            // <img src={icon} alt="Icon" className="w-6 h-6" /> 
            // If the icon is a text emoji (more common)
            <span>{icon}</span> 
          ) : (
            // Default icon if none is selected
            <LuImage className="w-6 h-6 text-gray-500" />
          )}
        </div>
        
        {/* Text prompt */}
        <p className="text-sm text-gray-700">
          {icon ? "Change Icon" : "Pick Icon"}
        </p>
      </div>

      {/* Actual Emoji Picker Popup */}
      {isOpen && (
        <div className="absolute z-50 mt-2">
          {/* Close Button for the Picker (Optional) */}
          <button
              type="button"
              className="absolute top-1 right-1 z-10 p-1 bg-white rounded-full hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
          >
              <LuX className="w-4 h-4" />
          </button>
          
          {/* The imported EmojiPicker component */}
          <EmojiPicker 
            onEmojiClick={handleEmojiSelect}
            // Optional: Customize appearance, theme, etc.
            // theme="auto" 
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;