import { TicketsProvider } from './contexts';
import { AppLayout } from "./layout";
import { ThemeProvider } from "./providers";
import { Routes } from "./routes";
import "./styles/scrollbar.css";

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <TicketsProvider>
          <Routes/>
        </TicketsProvider>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
