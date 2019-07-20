import * as React from 'react';

interface TagsProps {
  exchange: string | undefined;
  sector: string | undefined;
}

export const CompanyTags: React.FunctionComponent<TagsProps> = ({
  exchange,
  sector,
}: TagsProps) => {
  return (
    <div className="company-tags">
      <span>{exchange}</span>
      <span>{sector}</span>
      <span>USD</span>
    </div>
  );
};
