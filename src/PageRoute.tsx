import { Routes, Route } from 'react-router'
import App from './App';
import TVShow from './page/TVShow';
import Movie from './page/Movie';
import Home from './page/Home';
import { PATH } from './const';

const PageRoute = () => {
    return (
        <Routes>
            <Route Component={App}>
                <Route path={PATH.HOME} Component={Home} />
                <Route path={PATH.TVSHOW} Component={TVShow} />
                <Route path={PATH.MOVIE} Component={Movie} />
            </Route>
        </Routes>
    )
}
export default PageRoute;