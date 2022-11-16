import {useEffect, useState} from 'react';
import {steps} from './steps';
import {Box, Typography, Stepper, Step, StepLabel, styled, Tooltip} from '@mui/material';
import {MdCancel, MdCheckCircle} from 'react-icons/md';
import { TicketDetailsSidebar } from './ticket-details-sidebar';


const application = {
  title: 'אויש לא עובד לי האאוטלוק',
  owner: 'עמית סופר',
  responsibleOfficer: 'אביעד רוזנקנוף',
  responsibleTeam: ['סיסטם'],
  status: 'בטיפול',
  steps
}

const stepLabelTheme = {
  backgroundColor: '#d9d9d9',
  padding: '12px',
  borderRadius: '8px'
};

const getCommentBody = step =>
  <Typography sx={stepLabelTheme}>
    <b>{step.owner}</b> הוסיף תגובה: <br/> {step.comment} 
  </Typography>

const StepperBox = styled(Box)`
  overflow: auto;
  height: 600px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

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

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView();
  });

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
    <Box display="flex" flex={1} height="100vh">
      <Box flex={1} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '600px'
      }}>
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px'}}>
        <Typography variant='h5'>{application.title}&emsp;</Typography>
        <Box>
          <Box sx={{
            borderRadius: '50%', 
            backgroundColor: '#5869ff',
            width: '10px',
            height: '10px'}}></Box>
          </Box>
          <Typography>&nbsp;{application.status}&emsp;</Typography>
          <Tooltip title='סיים טיפול'>
            <Box>
              <MdCheckCircle size={22} />
            </Box>
          </Tooltip>
          <Tooltip title='בטל פנייה'>
            <Box>
              <MdCancel size={22} />
            </Box>
          </Tooltip>
        </Box>
        <StepperBox sx={{overflow: 'auto', width: '80%'}}>
          <Stepper orientation='vertical'>
            {application.steps.map((step, index) => <Step key={index} active>
              <StepLabel>
              <Typography variant='subtitle2'>{step.date}</Typography>
                {step.label ? <Typography sx={stepLabelTheme}>{step.label}</Typography>: getCommentBody(step)}
              </StepLabel>
            </Step>)}
            <Step key={application.steps.length} active id='bottom'></Step>
          </Stepper>
        </StepperBox>
      </Box>
      <TicketDetailsSidebar ticket={ticket} onAddTeam={addTeam} width={425}/>
    </Box>
  );
}