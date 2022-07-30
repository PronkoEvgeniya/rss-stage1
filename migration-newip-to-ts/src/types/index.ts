export interface Sourse {
    id: string;
    name: string;
    description: string;
    url: string;
    category?: string;
    language?: string;
    country?: string
}
export interface NewsData {
    author: string;
    source: Sourse
    urlToImage: string;
    publishedAt: string;
    url: string;
    title: string;
    description: string
}
export interface IRequest {
    [index: string]: string | undefined;
    apiKey: string;
    sources: string | undefined;
    
}