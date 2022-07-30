import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0dce9cddec4d4411aafe7335dd25563e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
