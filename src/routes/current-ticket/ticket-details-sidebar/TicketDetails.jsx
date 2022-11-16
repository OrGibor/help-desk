import { Box, Typography } from '@mui/material';

import { DetailTitle } from './DetailTitle';
import { ShortDetail } from './ShortDetail';

export const TicketDetails = ({ticket}) => (
  <Box display="flex" flexDirection="column" gap={1}>
    <ShortDetail>
      <DetailTitle>טלפון זמין</DetailTitle>
      <Typography>{ticket.author.phoneNumber}</Typography>
    </ShortDetail>
    <Box>
      <DetailTitle>תיאור התקלה</DetailTitle>
      <Typography>{ticket.description}</Typography>
    </Box>
    <Box>
      <DetailTitle>כמה התקלה משביתה?</DetailTitle>
      <Box sx={{height: 50, backgroundColor: 'gray'}}></Box>
    </Box>
    <Box display="flex" justifyContent="space-around">
      <ShortDetail>
        <DetailTitle>רשת</DetailTitle>
        <Typography>{ticket.network}</Typography>
      </ShortDetail>
      <ShortDetail>
        <DetailTitle>אתר</DetailTitle>
        <Typography>{ticket.site}</Typography>
      </ShortDetail>
    </Box>
  </Box>
);