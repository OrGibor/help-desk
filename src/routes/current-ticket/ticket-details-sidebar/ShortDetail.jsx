import { Box } from '@mui/material';

export const ShortDetail = ({children}) => (
  <Box display="flex" alignItems="center" gap={2}>
    {children}
  </Box>
);