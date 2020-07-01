import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import GitHub from './GitHub';
import WebAuthn from './WebAuthn';

const LayoutGrid = ({ children, itemProps = {}, value, onSelect, ...props }) => (
  <Grid {...props}>
    {children.map((child, i) => (
      <Grid item key={i}>
        {React.cloneElement(child, { active: (i === value), onClick: () => onSelect(i), ...itemProps })}
      </Grid>
    ))}
  </Grid>
);

const Autorizations = ({ type, setAuthControls }) => {
  const [value, setValue] = useState();

  return (
    <LayoutGrid
      container
      justify='center'
      spacing={1}
      onSelect={(i) => setValue(i === value ? null : i)}
      value={value}
      itemProps={{
        type,
        setAuthControls,
      }}
    >
      <GitHub />
      <WebAuthn />
    </LayoutGrid>
  );
};

export default Autorizations;
