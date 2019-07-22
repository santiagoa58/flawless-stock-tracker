import * as React from 'react';

export const CompanyTags = ({ exchange, sector }: TagsProps) => {
  return (
    <div className="company-tags">
      <span>{exchange}</span>
      <span>{sector}</span>
      <span>USD</span>
    </div>
  );
};

interface TagsProps {
  exchange: string | undefined;
  sector: string | undefined;
}
