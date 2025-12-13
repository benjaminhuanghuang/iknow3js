import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
