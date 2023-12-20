
import { Box } from '@mui/material';
import BarCh from './BarCh';
import { Header } from "../../components/Header"
const Bar = () => {

    return (
        <Box>
            <Header title={"Bar Chart"} subtitle={"The minimum wage in Germany, France and Spain (EUR/month)"} />
            <BarCh />
        </Box>
    )
}

export default Bar