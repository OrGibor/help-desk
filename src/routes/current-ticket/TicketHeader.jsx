import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { MdCancel, MdCheckCircle } from 'react-icons/md';

const application = {
  title: 'אויש לא עובד לי האאוטלוק',
  owner: 'עמית סופר',
  responsibleOfficer: 'אביעד רוזנקנוף',
  responsibleTeam: ['סיסטם'],
  status: 'בטיפול',
};

export const TicketHeader = ({onComplete, onCancel}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px={2} my={2}>
      <Typography variant='h5'>{application.title}</Typography>
      <Box display="flex" alignItems="center">
        <Box width={10} height={10} sx={{borderRadius: '50%', backgroundColor: '#5869ff'}}/>
        <Typography>&nbsp;{application.status}&emsp;</Typography>
        <Tooltip title='סיים טיפול'>
          <IconButton color="success" onClick={onComplete}>
            <MdCheckCircle size={22} />
          </IconButton>
        </Tooltip>
        <Tooltip title='בטל פנייה'>
          <IconButton color="error" onClick={onCancel}>
            <MdCancel size={22} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}