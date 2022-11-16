import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { Avatar, Card, CardContent, CardHeader, TextField } from '@mui/material';

export const NewCommentCard = () => {
  return (
    <Card>
      <CardHeader
        sx={{py: 1}}
        avatar={
          <Avatar>
            <ModeCommentOutlinedIcon />
          </Avatar>
        }
        title="הוסף תגובה חדשה"
      />
      <CardContent sx={{py: 0}}>
        <TextField
          sx={{
              backgroundColor: "",
              borderRadius: "20px",
          }}

          InputProps={{ 
              inputProps: {
                  style: {
                      color: "text.primary",
                      textAlign: "right",
                  }
          }}}
          variant="outlined"
          multiline
          fullWidth
          minRows={3}
          maxRows={5}
        />
      </CardContent>
    </Card>
  )
}