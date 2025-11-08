

'use client'; // ⚠️ 一定要加這行，因為 Redux Provider 是 client component

import { store } from '@/store/store';
import { Provider } from 'react-redux';


export default function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}