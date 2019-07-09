import {
  isQuote,
  isOverview,
  isKeyStats,
  areNews,
  areEarnings,
  areTimeSeries,
  Quote,
  Overview,
  KeyStats,
  Article,
  News,
  Earning,
  Earnings,
  TimeSeries,
  TimePoint,
} from '../src/util';

const mockQuote: Quote = {
  symbol: '',
  companyName: '',
  calculationPrice: '',
  open: 0,
  openTime: 0,
  close: 0,
  closeTime: 0,
  high: 0,
  low: 0,
  latestPrice: 0,
  latestSource: '',
  latestTime: '',
  latestUpdate: 0,
  latestVolume: 0,
  iexRealTimePrice: 0,
  iexRealTimeSize: 0,
  iexLastUpdated: 0,
  extendedPrice: 0,
  extendedChange: 0,
  extendedChangePercent: 0,
  extendedPriceTime: 0,
  previousClose: 0,
  change: 0,
  changePercent: 0,
  iexMarketPercent: 0,
  iexVolume: 0,
  avgTotalVolume: 0,
  iexBidPrice: 0,
  iexBidSize: 0,
  iexAskPrice: 0,
  iexAskSize: 0,
  marketCap: 0,
  peRatio: 0,
  week52High: 0,
  week52Low: 0,
  ytdChange: 0,
  delayedPrice: 0,
  delayedPriceTime: 0,
};

const mockOverview: Overview = {
  symbol: '',
  companyName: '',
  exchange: '',
  industry: '',
  website: '',
  description: '',
  CEO: '',
  securityName: '',
  issueType: '',
  setor: '',
  employees: 0,
  tags: [],
};

const mockKeyStats: KeyStats = {
  companyName: '',
  marketcap: 0,
  week52high: 0,
  week52low: 0,
  week52change: 0,
  peRatio: 0,
  dividendYield: 0,
};

const mockArticle: Article = {
  datetime: 0,
  headline: '',
  source: '',
  url: '',
  summary: '',
  related: '',
  image: '',
  lang: '',
  hasPaywall: false,
};

const mockNews: News = {
  news: [mockArticle],
};

const mockEarning: Earning = {
  actualEPS: 0,
  consensusEPS: 0,
  announceTime: '',
  numberOfEstimates: 0,
  EPSSurpriseDollar: 0,
  EPSReportDate: '',
  fiscalPeriod: '',
  fiscalEndDate: '',
  yearAgo: 0,
  yearAgoChangePercent: 0,
};

const mockEarnings: Earnings = {
  symbol: '',
  earnings: [mockEarning],
};

const mockTimePoint: TimePoint = {
  date: '',
  open: 0,
  high: 0,
  low: 0,
  close: 0,
  volume: 0,
  unadjustedVolume: 0,
  change: 0,
  changePercent: 0,
  vwap: 0,
  label: '',
  changeOverTime: 0,
};

const mockTimeSeries: TimeSeries = {
  timeSeries: [mockTimePoint],
};

test('Succesfully detect that mockQuote is an implementation of Quote', () => {
  expect(isQuote(mockQuote)).toBe(true);
});

test('Succesfully detect that mockOverview is an implementation of Overview', () => {
  expect(isOverview(mockOverview)).toBe(true);
});

test('Succesfully detect that mockKeyStats is an implementation of KeyStats', () => {
  expect(isKeyStats(mockKeyStats)).toBe(true);
});

test('Succesfully detect that mockNews is an implementation of News', () => {
  expect(areNews(mockNews)).toBe(true);
});

test('Succesfully detect that mockEarnings is an implementation of Earnings', () => {
  expect(areEarnings(mockEarnings)).toBe(true);
});

test('Succesfully detect that mockTimeSeries is an implementation of TimeSeries', () => {
  expect(areTimeSeries(mockTimeSeries)).toBe(true);
});
