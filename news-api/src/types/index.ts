export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'general' | 'business' | 'technology' | string;
  language: string;
  country: string;
};

export type SourcesResponse = {
  status: string;
  sources: Source[];
};

interface ArticleSource {
  id: string | null;
  name: string;
}

export type Article = {
  source: ArticleSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type NewsResponse = {
  status: string;
  articles: Article[];
};
