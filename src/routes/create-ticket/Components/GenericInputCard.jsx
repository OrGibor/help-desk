import * as React from 'react';
import { TextField, Card, CardContent, CardHeader } from '@mui/material';

export const GenericInputCard = (props) => {
        return(
        <Card>
            <CardHeader
            avatar = { props.avatar }
            title = { props.title }
            />

            <CardContent>
                        <TextField
                        sx={{
                            backgroundColor: "info.main",
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
                        }}

                        variant = "standard"

                        multiline
                        fullWidth
                        minRows = { props.minRows }
                        maxRows = { props.maxRows }
                        />
            </CardContent>
        </Card>
        );
    }

GenericInputCard.defaultProps = {
    minRows: 3,
    maxRows: 5
}