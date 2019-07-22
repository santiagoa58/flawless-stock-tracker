import * as React from 'react';

export const TopPeers: React.FunctionComponent<PeersProps> = ({
  topPeers,
}: PeersProps) => {
  return (
    <div className="section-topPeers">
      <h2 className="heading-section">Top Peers</h2>
      {topPeers.map((peer, idx) => (
        <span className="section-topPeers__peer" key={idx}>
          {peer}{' '}
        </span>
      ))}
    </div>
  );
};

interface PeersProps {
  topPeers: string[];
}
