import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const QuickBusinessWizardForm = () => {
  return (
    <div className="bg-white rounded p-5 flex flex-col justify-center items-center">
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        <h3 className='text-lg font-bold text-gray-800'>Type of Business</h3>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        aria-required
        onChange={(e)=>console.log(e.target.value)}
        name="radio-buttons-group"
      >
        <FormControlLabel value="corporation" control={<Radio />} label="Corporation" />
        <FormControlLabel value="sole-proprietorship" control={<Radio />} label="Sole Proprietorship" />
        <FormControlLabel value="partnership" control={<Radio />} label="Partnership" />
      </RadioGroup>
    </FormControl>
    </div>
  );
};

export default QuickBusinessWizardForm;