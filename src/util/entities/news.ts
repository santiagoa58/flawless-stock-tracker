export interface News {
  news: Article[];
}

export interface Article {
  datetime: number;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string;
  image: string;
  lang: string;
  hasPaywall: boolean;
}
