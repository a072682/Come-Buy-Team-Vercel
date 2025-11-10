

'use client'; // ⚠️ 一定要加這行，因為 Redux Provider 是 client component

import { store } from '@/store/store';
import { SessionProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from "react-redux";


export default function Providers({ children }) {
  return (
    <SessionProvider /* optional: refetchOnWindowFocus={false} */>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </SessionProvider>
  );
}