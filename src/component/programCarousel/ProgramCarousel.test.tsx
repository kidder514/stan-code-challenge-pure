import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgramCarousel from './ProgramCarousel';
import { render } from '../../util/wrapRender';
import dataJson from '../../mock/data.json';
import { Program } from '../../type';

describe('ProgramCarousel', () => {
    const props = {
        isLoading: true,
        data: [],
        isError: false,
        indexSelected: undefined
    }

    it('ProgramCarouselPlaceholder should render when isLoading is true', () => {
        render(<ProgramCarousel {...props} />);
        expect(screen.getByTestId('stan-carousel-placeholder')).toBeInTheDocument();
    });

    it('ErrorSection should render when isError is true', () => {
        render(<ProgramCarousel {...props} isLoading={false} isError={true} />);
        expect(screen.getByText('An unknown error occurred.please try again later')).toBeInTheDocument();
    });

    it('nothing should render when data is empty', () => {
        render(<ProgramCarousel {...props} isLoading={false} isError={false} data={[]} />);
        const carousel = screen.queryByTestId('stan-carousel')
        expect(carousel).not.toBeInTheDocument();
    });

    it('the list should render correctly', () => {
        render(<ProgramCarousel {...props} isLoading={false} isError={false} data={dataJson as Program[]} />);
        expect(screen.getAllByRole('program-thumbnail')).toHaveLength(dataJson.length);
    });

    it('selected program should have the selected class', () => {
        render(<ProgramCarousel {...props} isLoading={false} isError={false} data={dataJson as Program[]} indexSelected={2} />);
        expect(screen.getAllByRole('program-thumbnail')[1]).not.toHaveAttribute('class', 'selected');
        expect(screen.getAllByRole('program-thumbnail')[2]).toHaveAttribute('class', 'selected');
        expect(screen.getAllByRole('program-thumbnail')[3]).not.toHaveAttribute('class', 'selected');
    });

    it('Carousel should scroll have the correct offset', () => {
        render(<ProgramCarousel {...props} isLoading={false} isError={false} data={dataJson as Program[]} indexSelected={10} />);
        const carousel = screen.queryByTestId('stan-carousel')
        expect(carousel).toHaveStyle('transform: translateX(-120%)');
    });
});
