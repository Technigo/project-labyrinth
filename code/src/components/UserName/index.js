import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
export const UserName = () => {
    const userName = useSelector(store => store.maze.userName)

    return (
        <>
            {userName &&
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                            {userName}
                        </Typography>
                    </Toolbar>
                </AppBar>}
        </>
    );
}
