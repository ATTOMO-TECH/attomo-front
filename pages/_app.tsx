import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </AuthProvider>
);

export default MyApp;
