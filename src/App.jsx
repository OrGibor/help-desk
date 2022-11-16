import { AppLayout } from './AppLayout';
import { TicketsProvider } from './contexts';
import { ThemeProvider } from './providers';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <TicketsProvider>
          <Routes/>
        </TicketsProvider>
      </AppLayout>
    </ThemeProvider>
  )
}

export default App;
