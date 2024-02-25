import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SingleProgram from './SingleProgram';
import dataJson from '../../mock/data.json';
import { Program } from '../../type';
import { render } from '../../util/wrapRender';

describe('SingleProgram', () => {
    const props = {
        isLoading: true,
        data: [],
        isError: false,
        indexSelected: undefined
    }

    it('SingleProgramPlaceholder should render when isLoading is true', () => {
        render(<SingleProgram {...props} />);
        expect(screen.getByTestId('stan-single-program-placeholder')).toBeInTheDocument();
    });

    it('ErrorSection should render when isError is true', () => {
        render(<SingleProgram {...props} isLoading={false} isError={true} />);
        expect(screen.getByText('An unknown error occurred.please try again later')).toBeInTheDocument();
    });

    it('nothing should render when data is empty', () => {
        render(<SingleProgram {...props} isLoading={false} isError={false} data={[]} />);
        const program = screen.queryByTestId('stan-single-program')
        expect(program).not.toBeInTheDocument();
    });

    it('nothing should render if there is no indexSelected', () => {
        render(<SingleProgram {...props} isLoading={false} isError={false} data={dataJson as Program[]} />);
        const program = screen.queryByTestId('stan-single-program')
        expect(program).not.toBeInTheDocument();
    });

    it('nothing should render if indexSelected out of range', () => {
        render(<SingleProgram {...props} isLoading={false} isError={false} data={dataJson as Program[]} indexSelected={9999} />);
        const program = screen.queryByTestId('stan-single-program')
        expect(program).not.toBeInTheDocument();
    });

    it('the program should render correctly if all props are correct', () => {
        render(<SingleProgram {...props} isLoading={false} isError={false} data={dataJson as Program[]} indexSelected={0} />);
        expect(screen.getByText(dataJson[0].title)).toBeInTheDocument();
        expect(screen.getByText(dataJson[0].description)).toBeInTheDocument();
    });
});
