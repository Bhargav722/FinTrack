import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className='flex justify-center mb-6'>
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleImageChange}
        className='hidden'
      />

      { !image ? (
        <div className='flex flex-col items-center gap-3'>
          <LuUser className='text-5xl text-gray-400' />

          <button
            type='button'
            className='text-sm px-3 py-1.5 bg-primary text-white rounded-lg flex items-center gap-2'
            onClick={onChooseFile}
          >
            <LuUpload /> Upload Photo
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-3'>
          <img
            src={previewUrl}
            alt='profile'
            className='w-24 h-24 object-cover rounded-full shadow-md'
          />

          <button
            type='button'
            className='text-sm px-3 py-1.5 bg-red-500 text-white rounded-lg flex items-center gap-2'
            onClick={handleRemoveImage}
          >
            <LuTrash /> Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
