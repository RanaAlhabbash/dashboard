import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { PieChart } from "../../page/PieChart/PieChart";
import BarCh from "../../page/barChart/BarCh";
import { Geo } from "../../page/geography/Geo";

const Row3 = () => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} mt={2} flexWrap={"wrap"} gap={1.5}>
            <Paper sx={{flexGrow: 1, width: "28%", minWidth: "400px"}}>
                <Typography
                    color={theme.palette.secondary.main}
                    sx={{Padding: "30px 30px 0 30px"}}
                    variant="h6"
                    fontweight="600"
                >
                    Campaign
                </Typography>
                <PieChart isDashboord={true}/>
                <Typography variant="h6" align="center" sx={{mt: "15px"}}>
                    $48,352 revenue generated
                </Typography>
                <Typography variant="body2" px={0.7} pb={3} align="center" sx={{mt: "15px"}}>
                    Includes exstra misc expanditrues and costs
                </Typography>
            </Paper>
            <Paper sx={{flexGrow: 1, width: "33%", minWidth: "400px"}}>
                <Typography variant="h6" align="center" sx={{mt: "15px"}}>
                    Sales Quantity
                </Typography>
                <BarCh isDashboord={true}/>
            </Paper>
            <Paper sx={{flexGrow: 1, width: "33%", minWidth: "400px"}}>
                <Geo isDashboord={true}/>
            </Paper>
        </Stack>
    )
}

export default Row3;