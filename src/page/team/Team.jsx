// @ts-nocheck
// import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import {  rows } from './Data';
import { Box, Typography, useTheme } from '@mui/material';
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
  } from "@mui/icons-material";

  import { Header } from "../../components/Header"


const Team = () => {
    const theme = useTheme()

    const columns = [
        {field: 'id', headerName: 'ID', with: 33},
        {field: 'name', headerName: 'Name', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'age', headerName: 'Age', flex: 1},
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: 'access', headerName: 'Access', flex: 1, renderCell: ({row: {access}}) => {
            return(
                    <Box sx={{
                        p: "5px",
                        width: "99px",
                        borderRadius: "center",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-evenly",
                        backgroundColor: access === 'Admin' ? theme.palette.primary.dark : access === 'Manager'? theme.palette.secondary.dark : '#3da58a'
                    }}>
                    {access === 'Admin' && (<AdminPanelSettingsOutlined sx={{color: '#fff'}} fontSize='small'/>)}
                    {access === 'Manager' && (<LockOpenOutlined sx={{color: '#fff'}} fontSize='small'/>)}
                    {access === 'User' && (<SecurityOutlined sx={{color: '#fff'}} fontSize='small'/>)}
                    <Typography sx={{fontSize: "13px", color: '#fff'}} variant="body1">{access}</Typography>
                </Box>
            )
        }},
    ]
    return (
        <Box style={{ height: 600, width: '98%', mx: 'auto' }}>
            <Header title={"TEAM"} subtitle={"Managing the Team Members"} />
            <DataGrid rows={rows} columns={columns} />
        </Box>
    )
}
export default Team