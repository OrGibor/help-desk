import * as React from 'react';
import { TextField, Card, CardContent, CardHeader, Avatar } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

export default class NewCommentBox extends React.Component {
    render() {
        return(
        <Card>
            <CardHeader
            avatar={<Avatar>
                        <ModeCommentOutlinedIcon/>
                    </Avatar>}

            title = "הוספת תגובה חדשה"
            />
            <CardContent>
                        <TextField

                        sx={{
                            backgroundColor: "primary.main",
                            borderRadius: "20px",
                        }}

                        InputProps={{ 
                            inputProps: {
                                style: {
                                    color: "text.primary",
                                    textAlign: "right",
                                    margin: "8px",
                                }
                            },

                            disableUnderline: true,
                            color: "white",
                        }}

                        variant = "standard"

                        multiline
                        fullWidth
                        minRows = { 3 }
                        maxRows = { 5 }/>
            </CardContent>
        </Card>
        );
    }
}

// export default NewCommentBox;