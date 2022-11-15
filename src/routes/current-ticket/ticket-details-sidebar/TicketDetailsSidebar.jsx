import { Box, Divider, Paper, Typography } from '@mui/material';

import { TicketDetails } from './TicketDetails';
import { TicketFileList } from './TicketFileList';
import { TicketTroubleshooters } from './TicketTroubleshooters';

export const TicketDetailsSidebar = ({ticket, onAddTeam}) => (
  <Paper sx={{width: 375, px: 1, pb: 2, overflow: 'auto', height: '100%'}}>
    <Header>מטפלים בתקלה</Header>
    <TicketTroubleshooters {...ticket.troubleshooters} onCreateTeam={onAddTeam}/>
    <Header>פרטי התקלה</Header>
    <TicketDetails ticket={ticket}/>
    <Header>קבצים מצורפים</Header>
    <TicketFileList files={ticket.files}/>
  </Paper>
);

const Header = ({children}) => (
  <Box pt={2} pb={1}>
    <Typography variant="h6">{children}</Typography>
    <Divider/>
  </Box>
);