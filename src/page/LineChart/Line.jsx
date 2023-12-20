import { Box } from "@mui/material"
import LineChart from "./LineChart"
import { Header } from "../../components/Header"


function Line() {
    return (
        <Box>
            <Header title={"Line Chart"} subtitle={"Simple Line Chart"} />
            <LineChart />
        </Box>
    )
}

export default Line
