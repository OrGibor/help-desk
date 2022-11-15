import { AppLayout } from './AppLayout';
import { ThemeProvider } from './providers';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Routes/>
      </AppLayout>
    </ThemeProvider>
  )
}

export default App;
