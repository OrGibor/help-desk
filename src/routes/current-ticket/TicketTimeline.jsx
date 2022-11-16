import { Box, Step, StepLabel, Stepper, styled, Typography } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { events } from './events';

const application = {
  title: 'אויש לא עובד לי האאוטלוק',
  owner: 'עמית סופר',
  responsibleOfficer: 'אביעד רוזנקנוף',
  responsibleTeam: ['סיסטם'],
  status: 'בטיפול',
  events
};

const eventStyles = {
  backgroundColor: '#d9d9d9',
  padding: '12px',
  borderRadius: '8px'
};

export const TicketTimeline = () => {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, []);

  return (
    <StepperBox ref={boxRef} px={2} width="100%">
      <Stepper orientation='vertical'>
        {application.events.map((event, index) => (
          <Step key={index} active>
            <StepLabel>
            <Typography variant='subtitle2'>{event.date}</Typography>
              {event.type === 'update' ? <Typography sx={eventStyles} dangerouslySetInnerHTML={{
                __html: event.label.replace(/\*(.+)\*/, '<b>$1</b>')
              }}/>: <CommentBody author={event.author} content={event.content}/>}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </StepperBox>
  )
}

const CommentBody = ({author, content}) => (
  <Typography sx={eventStyles}>
    <b>{author}</b> הוסיף תגובה: <br/> {content} 
  </Typography>
);

const StepperBox = styled(Box)`
  overflow: auto;
  flex: 1;
  &::-webkit-scrollbar {
    width: 0;
  }
`;