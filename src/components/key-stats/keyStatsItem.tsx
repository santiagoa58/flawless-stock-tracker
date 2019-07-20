import * as React from 'react';

export const KeyStatsItem = ({ name, value }: StatsItemProps) => {
  if (name.toLowerCase().includes('range')) {
    return (
      <li className="section-keystats__list-item">
        <span className="section-keystats__list-item--name">{name}</span>
        {value.low != null ? (
          <span className="section-keystats__list-item--value">
            {value.low} - {value.high}
          </span>
        ) : (
          <span>N/A</span>
        )}
      </li>
    );
  }

  return (
    <li className="section-keystats__list-item">
      <span className="section-keystats__list-item--name">{name}</span>
      <span className="section-keystats__list-item--value">
        {value ? value : 'N/A'}
      </span>
    </li>
  );
};

interface StatsItemProps {
  name: string;
  value: any;
}
