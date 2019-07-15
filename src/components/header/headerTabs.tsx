import * as React from 'react';

export const HeaderTabs = () => {
  return (
    <div className="header-tabs">
      <a className="header-tabs--active" href="#">
        QUOTES
      </a>
      <a href="#">MARKETS</a>
      <a href="#">WATCHLISTS</a>
    </div>
  );
};
