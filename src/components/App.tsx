import * as React from 'react';
import { HeaderContainer } from './header/headerContainer';

export const App: React.SFC = () => {
  return (
    <>
      <h1>title</h1>
      <HeaderContainer title="Stock Tracker App" />
    </>
  );
};
