import { Box } from '@mui/material';
import { useState } from 'react';
import { NewCommentCard } from './NewCommentCard';
import { TicketDetailsSidebar } from './ticket-details-sidebar';
import { TicketHeader } from './TicketHeader';
import { TicketTimeline } from './TicketTimeline';

const image = 'https://static.remove.bg/remove-bg-web/221525818b4ba04e9088d39cdcbd0c7bcdfb052e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png';

const defaultTicket = {
  description: 'אני לא מצליח להיכנס לנשר',
  site: 'קריה',
  network: 'ק"ב',
  author: {
    phoneNumber: '052-7979226'
  },
  troubleshooters: {
    lead: {name: 'איתי יעקובסון', image},
    teams: [
      {
        id: 1,
        name: 'משוב'
      },
      {
        id: 2,
        name: 'נשר'
      },
      {
        id: 3,
        name: 'secops'
      },
      {
        id: 4,
        name: 'סיסטם'
      }
    ]
  },
  files: [
    {
      title: 'פותקאסט.txt',
      link: ''
    }
  ]
};

export const CurrentTicketPage = () => {
  const [ticket, setTicket] = useState(defaultTicket);

  const addTeam = newTeam => {
    setTicket(oldTicket => {
      const newTicket = {...oldTicket};

      newTicket.troubleshooters.teams = newTicket.troubleshooters.teams.concat({
        id: newTicket.troubleshooters.teams.length + 1,
        name: newTeam
      });

      return newTicket;
    });
  }
  
  return (
    <Box display="flex" flex={1}>
      <Box display="flex" flexDirection="column" flex={1}>
        <TicketHeader/>
        <TicketTimeline/>
        <NewCommentCard/>
      </Box>
      <TicketDetailsSidebar ticket={ticket} onAddTeam={addTeam} width="40%"/>
    </Box>
  );
}