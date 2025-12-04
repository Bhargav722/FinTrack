import React, { useState } from 'react';
import Input from '../Inputs/Input'
// Assuming 'Input' is a custom component and 'LuPlus' is used elsewhere in the form
// import Input from '../../ui/Input'; 
// import Button from '../../ui/Button'; 
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddIncomeForm = ({ onAddIncome }) => {
  // Initial state for the income form fields
  const [income, setIncome] = useState({
    source: '',
    amount: '',
    date: '',
    icon: '', // Assuming an optional field for an icon
    // ...other fields if any
  });

  // Handler to update the state when an input changes
  const handleChange = (key, value) => {
    setIncome((prevIncome) => ({
      ...prevIncome,
      [key]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate data if necessary
    onAddIncome(income); // Call the parent function to handle adding the income
    // Optionally reset the form here:
    // setIncome({ source: '', amount: '', date: '', icon: '' });
  };

  return (
    <div className="p-4">
        <EmojiPickerPopup
            icon={income.icon}
            onSelect = {(selectedicon)=>handleChange('icon',selectedicon)}  
    />
      <form onSubmit={handleSubmit}>
        {/* Input for Source/Description (Assuming a text input) */}
        <div className="mb-4">
          {/* Using a placeholder <Input> component based on the image */}
          <Input 
            value={income.source} 
            onChange={({ target }) => handleChange("source", target.value)} 
            label="Source" 
            placeholder="e.g., Salary, Freelance, Bonus" 
            type="text" 
          />
        </div>

        {/* Input for Amount (Type: number) */}
        <div className="mb-4">
          <Input 
            value={income.amount} 
            onChange={({ target }) => handleChange("amount", target.value)} 
            label="Amount" 
            placeholder="0.00" 
            type="number" 
          />
        </div>

        {/* Input for Date (Type: date) */}
        <div className="mb-4">
          <Input 
            value={income.date} 
            onChange={({ target }) => handleChange("date", target.value)} 
            label="Date" 
            placeholder="" 
            type="date" 
          />
        </div>

        {/* Button to submit the form */}
        {/* Assuming a custom Button component or a styled native button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Add Income
        </button>
      </form>
    </div>
  );
};

export default AddIncomeForm;