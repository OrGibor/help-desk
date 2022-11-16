import { Box } from '@mui/material';
import { useState } from 'react';
import { TicketDetailsSidebar } from './ticket-details-sidebar';

const image = 'https://static.remove.bg/remove-bg-web/221525818b4ba04e9088d39cdcbd0c7bcdfb052e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png';

const defaultTicket = {
  description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.',
  site: 'מקמ"ר',
  network: 'ק"ב',
  author: {
    phoneNumber: '052-7979226'
  },
  troubleshooters: {
    lead: {name: 'נועה ויס', image},
    teams: [
      {
        id: 1,
        name: 'סיסטם'
      },
      {
        id: 2,
        name: 'secops'
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
    <Box display="flex" justifyContent="end" height="100vh">
      <TicketDetailsSidebar ticket={ticket} onAddTeam={addTeam}/>
    </Box>
  );
}