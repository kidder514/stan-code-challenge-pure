export interface Playable {
    id: number;
    title: string;
    description: string;
    type: 'series' | 'movie';
    image: string;
    rating: string;
    genre: string;
    year: number;
    language: string
}

export const PATH = {
    HOME: '/',
    TVSHOW: '/tv-show',
    MOVIE: '/movie',
}