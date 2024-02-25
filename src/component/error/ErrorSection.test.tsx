import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorSection from './ErrorSection';

describe('ErrorSection', () => {
    it('ErrorSection should render', () => {
        render(<ErrorSection />);
        expect(screen.getByText('An unknown error occurred.please try again later')).toBeInTheDocument();
    });
});
