import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export const Fanmiles = () => {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label="AddMember">
                <PersonIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <SettingsIcon />
              </IconButton>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </>
          }
          title="Shrimp and Chorizo Paella"
        />
      </Card>
      <Button variant="outlined">Create</Button>
    </div>
  )
}
