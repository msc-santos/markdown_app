// base: https://www.positronx.io/how-to-create-live-markdown-editor-in-react-js/

import React from 'react';
import Markdown from 'src/components/Markdown';
import InputText from 'src/components/InputText';

import { Grid, Container } from '@mui/material'

const Main: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{
        margin: 2
      }}>
        <Grid item xs={12} sm={12} md={6} lg={4} >
          <InputText />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Markdown />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main;