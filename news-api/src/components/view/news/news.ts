import { Article } from '../../../types';
import './news.css';

class News {
  draw(data: Article[]) {
    const root = document.querySelector('.news');

    if (!root) return;

    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector(
      '#newsItemTemp'
    ) as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(
        true
      ) as HTMLTemplateElement;

      const newsItem = newsClone.querySelector('.news__item');
      const newsAuthor = newsClone.querySelector('.news__meta-author');
      const newsDate = newsClone.querySelector('.news__meta-date');
      const newsTitle = newsClone.querySelector('.news__description-title');
      const newsSource = newsClone.querySelector('.news__description-source');
      const newsContent = newsClone.querySelector('.news__description-content');
      const newsReadMore = newsClone.querySelector('.news__read-more a');

      if (
        !newsItem ||
        !newsAuthor ||
        !newsDate ||
        !newsTitle ||
        !newsSource ||
        !newsContent ||
        !newsReadMore
      )
        return;

      if (idx % 2) newsItem.classList.add('alt');

      (
        newsClone.querySelector('.news__meta-photo') as HTMLImageElement
      ).style.backgroundImage =
        `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      newsAuthor.textContent = item.author || item.source.name;
      newsDate.textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsTitle.textContent = item.title;
      newsSource.textContent = item.source.name;
      newsContent.textContent = item.description;
      newsReadMore.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    root.innerHTML = '';
    root.appendChild(fragment);
  }
}

export default News;
