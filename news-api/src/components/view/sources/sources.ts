import { Source } from '../../../types';
import './sources.css';

class Sources {
  draw(data: Source[]) {
    const root = document.querySelector('.sources');

    if (!root) return;

    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector(
      '#sourceItemTemp'
    ) as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(
        true
      ) as HTMLTemplateElement;

      const itemName = sourceClone.querySelector('.source__item-name');
      const sourceItem = sourceClone.querySelector('.source__item');

      if (!itemName || !sourceItem) return;

      itemName.textContent = item.name;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    root.append(fragment);
  }
}

export default Sources;
