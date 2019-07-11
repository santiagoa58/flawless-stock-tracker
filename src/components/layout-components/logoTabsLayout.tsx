import * as React from 'react';
import { AdaptiveLogo } from '../header/adaptiveLogo';
import { HeaderTabs } from '../header/headerTabs';

export const LogoTabsLayout = () => {
  return (
    <>
      <div className="header-wrapper--top">
        <AdaptiveLogo />
        <HeaderTabs />
      </div>
    </>
  );
};
