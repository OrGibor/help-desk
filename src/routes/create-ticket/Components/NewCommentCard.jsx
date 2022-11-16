import * as React from 'react';
import { Avatar } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { GenericInputCard } from './GenericInputCard';


export const NewCommentCard = () =>  {
    
    return (
            <GenericInputCard
                title = "הוסף תגובה חדשה"
                avatar = {
                    <Avatar>
                        <ModeCommentOutlinedIcon />
                    </Avatar>
                }
            />
    );
}
