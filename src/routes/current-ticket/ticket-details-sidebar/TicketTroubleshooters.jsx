import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Chip, IconButton, Input } from '@mui/material';
import { useRef, useState } from 'react';

import { UserDisplay } from '../../../components';
import { DetailTitle } from './DetailTitle';
import { ShortDetail } from './ShortDetail';

export const TicketTroubleshooters = ({lead: {name, image}, teams, onCreateTeam}) => (
  <Box display="flex" flexDirection="column" gap={1}>
    <ShortDetail>
      <DetailTitle>מטפל ראשי</DetailTitle>
      <UserDisplay name={name} image={image}/>
    </ShortDetail>
    <Box>
      <DetailTitle>צוותים מטפלים</DetailTitle>
      <Box display="flex" alignItems="center" gap={1} flex={1} flexWrap="wrap">
        {
          teams.map(({id, name}) => (
            <Chip key={id} label={name} variant="outlined" color="primary"/>
          ))
        }
        <CreateTeam onCreate={onCreateTeam}/>
      </Box>
    </Box>
  </Box>
);

const CreateTeamChipForm = ({onSubmit, onExit}) => {
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const teamName = inputRef.current.value;

    onSubmit(teamName);
    onExit();
  }

  return (
    <Chip label={
      <form onSubmit={handleSubmit}>
        <Input inputRef={inputRef} autoFocus sx={{width: 60, fontSize: 13}} size="small" onBlur={onExit}/>
      </form>
    }  variant="outlined" color="primary"/>
  )
}

const CreateTeam = ({onCreate}) => {
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);

  if (!isCreatingTeam) {
    return (
      <IconButton onClick={() => setIsCreatingTeam(true)}>
        <AddCircleIcon color="primary"/>
      </IconButton>
    );
  }

  return <CreateTeamChipForm onSubmit={onCreate} onExit={() => setIsCreatingTeam(false)}/>
}
