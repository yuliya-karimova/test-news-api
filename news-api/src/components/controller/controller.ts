import { NewsResponse, SourcesResponse } from '../../types';
import AppLoader from './appLoader';
import { ResponseCallback } from './loader/loader.types';

class AppController extends AppLoader {
  getSources(callback: ResponseCallback<SourcesResponse>) {
    super.getResp<SourcesResponse>(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: ResponseCallback<NewsResponse>) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (!sourceId) return;

        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
