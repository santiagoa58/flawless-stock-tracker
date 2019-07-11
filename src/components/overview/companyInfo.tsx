import * as React from 'react';
import { urlFormatter } from './urlFormatter';
import { Overview } from '../../util/';

interface OverviewProps {
  companyInfo: Overview;
}

export const CompanyInfo: React.FunctionComponent<OverviewProps> = ({
  companyInfo,
}: OverviewProps) => {
  const { companyName, symbol, description, website } = companyInfo;

  return (
    <div className="section-companyinfo">
      <h2 className="heading-section">Company Overview</h2>
      <h2 className="section-companyinfo__name">
        {companyName} {symbol ? symbol : ''}
      </h2>
      <span>
        <a className="section-companyinfo__link" href={website}>
          {urlFormatter(website)}
        </a>
      </span>
      <p className="section-companyinfo__description">{description}</p>
    </div>
  );
};
