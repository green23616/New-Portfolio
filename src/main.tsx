import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Component
import App from './App.tsx';
// Recoil
import { RecoilRoot } from 'recoil';
// Tanstack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient()}>
    <RecoilRoot>
      <StrictMode>
        <App />
      </StrictMode>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
