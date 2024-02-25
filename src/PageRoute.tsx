import { Routes, Route } from 'react-router'
import App from './App';
import TVShow from './page/TVShow';
import Movie from './page/Movie';
import Home from './page/Home';
import Program from './page/Program';
import { PATH } from './const';

const PageRoute = () =>
    <Routes>
        <Route Component={App}>
            <Route path={PATH.HOME} Component={Home} />
            <Route path={PATH.TVSHOW} Component={TVShow} />
            <Route path={PATH.MOVIE} Component={Movie} />
            <Route path={`${PATH.PROGRAM}/:id`} Component={Program} />
        </Route>
    </Routes>

export default PageRoute;