// import React from 'react'

 // @ts-ignore
 import { Box, Button, Stack } from "@mui/material"
  // @ts-ignore
import Row1 from "./Row1"
 // @ts-ignore
import Row2 from "./Row2"
// @ts-ignore
import Row3 from "./Row3"
import {DownloadOutlined } from "@mui/icons-material"
import { Header } from "../../components/Header"

const Dashboard = () => {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header isDashboard={true} title={"DASHBOARD"} subtitle={"welcom to your dashboard"} />
        <Box sx={{textAlign: "right"}}>
          <Button sx={{padding: "6px 8px", textTransform: "capitalize"}} variant="contained" color="primary">
            <DownloadOutlined />
            Download Report
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}

export default Dashboard
