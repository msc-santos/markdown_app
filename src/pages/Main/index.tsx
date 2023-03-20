// base: https://www.positronx.io/how-to-create-live-markdown-editor-in-react-js/

import React from 'react';
import Markdown from 'src/components/Markdown';
import InputText from 'src/components/InputText';

import VisibilityIcon from '@mui/icons-material/Visibility';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import { Grid, Container, Typography, useTheme } from '@mui/material'

const Main: React.FC = () => {
  const theme = useTheme()

  return (
    <Container sx={{ background: theme.palette.primary.light }}>
      <header>
        <Grid container spacing={2} sx={{
          margin: 2
        }}>
          <Grid item xs={12} sm={12} md={6} lg={5} >
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              <FormatColorTextIcon />  Markdown
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              <VisibilityIcon /> Preview
            </Typography>
          </Grid>
        </Grid>
      </header>
      <Grid container spacing={2} sx={{
        margin: 2
      }}>
        <Grid item xs={12} sm={12} md={6} lg={5} >
          <InputText />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7} sx={{ textAlign: 'center' }}>
          <Markdown />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main;