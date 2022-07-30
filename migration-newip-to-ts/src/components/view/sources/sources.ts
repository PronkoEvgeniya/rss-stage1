import './sources.css';
import { Sourse } from '../../../types';
class Sources {
    draw(data: Sourse[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item): void => {
            if (sourceItemTemp !== null) {
            const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        } else {throw new Error("error");}});
    
        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
