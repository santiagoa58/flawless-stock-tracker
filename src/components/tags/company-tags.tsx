import * as React from 'react';

interface Tags {
  exchange: string;
  sector: string;
}

export const CompanyTags: React.FunctionComponent<Tags> = ({
  exchange,
  sector,
}: Tags) => {
  return (
    <div>
      <span>{exchange}</span>
      <span>{sector}</span>
      <span>USD</span>
    </div>
  );
};
