export interface Earnings {
  symbol: string;
  earnings: Earning[];
}

interface Earning {
  actualEPS: number;
  consensusEPS: number;
  announceTime: string;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSReportDate: string;
  fiscalPeriod: string;
  fiscalEndDate: string;
  yearAgo: number;
  yearAgoChangePercent: number;
}
