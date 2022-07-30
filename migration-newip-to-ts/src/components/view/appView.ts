import { NewsData, Sourse } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export interface DataNews {
    articles: Array<NewsData>,
    sources: Array<Sourse>
}

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataNews) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
