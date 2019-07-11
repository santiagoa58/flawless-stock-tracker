import * as React from 'react';

interface StatsItemProps {
  name: string;
  value: any;
}

export const KeyStatsItem = ({ name, value }: StatsItemProps) => {
  if (name.toLowerCase().includes('range')) {
    if (value.low != null) {
      return (
        <li className="section-keystats__list-item">
          <span className="section-keystats__list-item--name">{name}</span>
          <span className="section-keystats__list-item--value">
            {value.low} - {value.high}
          </span>
        </li>
      );
    } else {
      return (
        <li className="section-keystats__list-item">
          <span className="section-keystats__list-item--name">{name}</span>
        </li>
      );
    }
  }

  return (
    <li className="section-keystats__list-item">
      <span className="section-keystats__list-item--name">{name}</span>
      <span className="section-keystats__list-item--value">{value}</span>
    </li>
  );
};
