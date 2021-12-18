import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/lab';

export const Day = () => {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return ( 
    <StaticDatePicker 
          value={value}
          onChange={handleChange}
          ToolbarComponent={() => <></>}
          renderInput={(params) => <TextField {...params} />}
        />
  )
}
