import * as React from 'react';
import { KeyStatsItem } from './keyStatsItem';

interface KeyStatsProps {
  companyStatsLeft: any[];
  companyStatsRight: any[];
}

export const KeyStatsList: React.FunctionComponent<KeyStatsProps> = ({
  companyStatsLeft,
  companyStatsRight,
}: KeyStatsProps) => {
  const keyStats = companyStatsLeft && (
    <>
      <h2 className="heading-section">Key Stats</h2>
      <div className="section-keystats__list">
        <ul>
          {companyStatsLeft.map(apiData => {
            const { name, value } = apiData;
            return <KeyStatsItem key={name} name={name} value={value} />;
          })}
        </ul>

        <ul>
          {companyStatsRight.map(apiData => {
            const { name, value } = apiData;
            return <KeyStatsItem key={name} name={name} value={value} />;
          })}
        </ul>
      </div>
    </>
  );
  return <div className="section-keystats">{keyStats}</div>;
};
