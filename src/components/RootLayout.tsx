import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from './Navbar';

export default function RootLayout() {
  return (
    <div className="flex flex-col h-full" data-testid="root-layout">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
