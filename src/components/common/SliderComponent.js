import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

function SliderComponent({
  defaultValue,
  minValue,
  maxValue,
  stepValue,
  onChange,
  value,
  label,
  unit,
  amount,
}) {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        max={maxValue}
        min={minValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={stepValue}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary" variant="caption">
          {unit} {minValue}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {unit} {maxValue}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SliderComponent;
