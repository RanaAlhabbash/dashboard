// import React from 'react'

import { Stack } from "@mui/material";
// @ts-ignore
import { Card } from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
// @ts-ignore
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
const theme = useTheme();
    return (
        <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={1}
        justifyContent={{ xs: "center", sm: "space-between" }}
        >
        <Card
            // @ts-ignore
            icon={
            <EmailIcon
                // @ts-ignore
                sx={{ fontSize: "23px", color: theme.palette.secondary }}
            />
            }
            title={"12,361"}
            subtitle={"Email Sent"}
            increase={"+14%"}
            data={data1}
            scheme={"nivo"}
        />
        <Card
            icon={
            <PointOfSaleIcon
                // @ts-ignore
                sx={{ fontSize: "23px", color: theme.palette.secondary }}
            />
            }
            title={"431,225"}
            subtitle={"sales obtained"}
            increase={"+21%"}
            data={data2}
            scheme={"catogry10"}
        />
        <Card
            icon={
            <PersonAddIcon
            // @ts-ignore
                sx={{ fontSize: "23px", color: theme.palette.secondary }}
            />
            }
            title={"32.441"}
            subtitle={"New Clients"}
            increase={"+5%"}
            data={data3}
            scheme={"accent"}
        />
        <Card
            icon={
            <TrafficIcon
            // @ts-ignore
                sx={{ fontSize: "23px", color: theme.palette.secondary }}
            />
            }
            title={"1,325,134"}
            subtitle={"Traffic Reveived"}
            increase={"+43%"}
            data={data4}
            scheme={"dark2"}
        />
        </Stack>
    );
};

export default Row1;
