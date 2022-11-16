import { Avatar, Box, Typography } from '@mui/material';

export const UserDisplay = ({name, image}) => (
  <Box display="flex" alignItems="center" gap={1}>
    {
      image ?
        <Avatar src={image}/> :
        <Avatar>{name.slice(0, 1)}</Avatar>
    }
    <Typography>{name}</Typography>
  </Box>
);