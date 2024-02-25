import { ProgramListStateInterface } from '../../redux/programList.slice';
import ErrorSection from '../error/ErrorSection';
import SingleProgramPlaceholder from './SingleProgramPlaceholder';

import './SingleProgram.css'

const SingleProgram = ({ isLoading, data, isError, indexSelected }: ProgramListStateInterface) => {

    if (isLoading) return <SingleProgramPlaceholder />;
    if (isError) return <ErrorSection />

    if (data.length <= 0 || indexSelected === undefined || !data[indexSelected]) return null;

    const program = data[indexSelected];
    return (
        <div className='stan-single-program' data-testid='stan-single-program'>
            <figure>
                <img src={program.image} alt={program.title} />
            </figure>
            <main>
                <h1 className='title'>{program.title}</h1>
                <div className='subtitle'>{`${program.rating} | ${program.year} | ${program.type} | ${program.genre} | ${program.language}`}</div>
                <div className='description'>{program.description}</div>
            </main>
        </div>
    )
}

export default SingleProgram;