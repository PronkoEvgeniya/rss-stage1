import { DataNews } from "../view/appView";

export type CallbackLoader<T> = (data: T) => void;
interface Options { [key: string]: string; }
class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: {endpoint: string, options?: Options},
        callback: CallbackLoader<DataNews> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: CallbackLoader<DataNews>, options = {}): void {
        const errorHandler = this.errorHandler.bind(this);
        fetch(this.makeUrl(options, endpoint), { method })
            .then(errorHandler)
            .then((res: Response) => res.json())
            .then((data: DataNews) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;