import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataNews } from '../view/appView';
class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: DataNews) => this.view.drawNews(data)));
        this.controller.getSources((data: DataNews) => this.view.drawSources(data));
    }
}

export default App;