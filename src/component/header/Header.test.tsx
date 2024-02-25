import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { render } from '../../util/wrapRender';

describe('Header', () => {
    it('Header should render', () => {
        render(<Header />);
        expect(screen.getByTestId('stan-header')).toBeInTheDocument();
    });

    it('Header should have the correct links', () => {
        render(<Header />);
        expect(screen.getByText('Home')).toHaveAttribute('href', '/');
        expect(screen.getByText('TV Show')).toHaveAttribute('href', '/tv-show');
        expect(screen.getByText('Movies')).toHaveAttribute('href', '/movie');
    });
});
