export type LoaderOptions = {
  [key: string]: string;
  apiKey: string;
};

export type HTTPMethods = 'GET';
export type ResponseCallback<Response> = (res: Response) => void;

export type ResponseInit = {
  endpoint: string;
  options?: Record<string, unknown>;
};
