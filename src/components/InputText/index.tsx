import React from 'react';
import TextField from '@mui/material/TextField';
import useText from 'src/hooks/useText';

const InputText: React.FC = () => {
  const { handleSetText } = useText()

  return <TextField fullWidth multiline onChange={((e: any) => handleSetText(e.target.value))}/>
}

export default InputText;