import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppNavbar } from './AppNavbar';

export const AppLayout = ({children}) => (
  <BrowserRouter>
    <Box display="flex" height="100vh" width="100vw">
      <AppNavbar width={256}/>
      <Box display="flex" flex={1}  overflow="auto">
        {children}
      </Box>
    </Box>
  </BrowserRouter>
);