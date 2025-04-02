import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import AppRoutes from "./routes/AppRoutes";
import CustomCursor from './components/CustomCursor';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <CustomCursor/>
            <AppRoutes/>
        </ThemeProvider>
    );
}

export default App;
