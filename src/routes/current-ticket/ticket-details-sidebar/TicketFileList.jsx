import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, Paper, Typography } from '@mui/material';
import { useState } from 'react';

const HOVERING_CARD_ELEVATION = 3;
const DEFAULT_CARD_ELEVATION = 1;

export const TicketFileList = ({files}) => (
  <Box display="flex" flexWrap="wrap" gap={2}>
    <UploadFileButton/>
    {
      files.map(({title, link}) => (
        <File key={link} title={title}/>
      ))
    }
  </Box>
);

const FileCard = ({icon: Icon, children, ...props}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Paper
      {...props}
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, cursor: 'pointer'}}
      elevation={isHovering ? HOVERING_CARD_ELEVATION : DEFAULT_CARD_ELEVATION}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Icon/>
      {children}
    </Paper>
  );
}

const File = ({title}) => (
  <FileCard icon={InsertDriveFileIcon}>
    <Typography sx={{direction: 'rtl'}}>{title}</Typography>
  </FileCard>
);

const UploadFileButton = () => (
  <FileCard icon={UploadFileIcon}>
    <Typography>העלה קובץ</Typography>
  </FileCard>
);