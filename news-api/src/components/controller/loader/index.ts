import {
  HTTPMethods,
  LoaderOptions,
  ResponseCallback,
  ResponseInit,
} from './loader.types';

class Loader {
  baseLink: string;
  options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<Response>(
    init: ResponseInit,
    callback: ResponseCallback<Response> = () => {
      console.error('No callback for GET response');
    }
  ) {
    const { endpoint, options = {} } = init;

    this.load<Response>('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Record<string, unknown>, endpoint: string): string {
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(this.options).forEach((key) => {
      url += `${key}=${this.options[key]}&`;
    });

    Object.keys(options).forEach((key) => {
      url += `${key}=${options[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<Response>(
    method: HTTPMethods,
    endpoint: string,
    callback: (res: Response) => void,
    options: Record<string, unknown> = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data as Response))
      .catch((err) => console.error(err));
  }
}

export default Loader;
