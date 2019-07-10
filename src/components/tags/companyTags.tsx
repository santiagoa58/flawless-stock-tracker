import * as React from 'react';

interface TagsProps {
  exchange: string;
  sector: string;
}

export const CompanyTags: React.FunctionComponent<TagsProps> = ({
  exchange,
  sector,
}: TagsProps) => {
  return (
    <div>
      <span>{exchange}</span>
      <span>{sector}</span>
      <span>USD</span>
    </div>
  );
};
