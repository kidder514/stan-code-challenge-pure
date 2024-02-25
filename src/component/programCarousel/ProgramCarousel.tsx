import { ProgramListStateInterface } from '../../redux/programList.slice';
import ProgramCarouselPlaceholder from './ProgramCarouselPlaceholder';
import ErrorSection from '../error/ErrorSection';

import './ProgramCarousel.css';

const ProgramCarousel = ({ isLoading, data, isError, indexSelected }: ProgramListStateInterface) => {

    if (isLoading) return <ProgramCarouselPlaceholder />;
    if (isError) return <ErrorSection />
    if (data.length <= 0) return null;

    const getOffset = () => {
        if (!indexSelected || indexSelected <= 4) return 0;

        return `-${(indexSelected - 4) * 20}%`
    }

    return (
        <div data-testid={'stan-carousel'} className='stan-program-list-carousel' style={{ transform: `translateX(${getOffset()})` }}>
            {
                data.map((program, index) =>
                    <figure
                        role='program-thumbnail'
                        key={`${program.id} -program - ${index} `}
                        className={indexSelected === index ? 'selected' : ''}
                    >
                        <div className='carousel-img-wrapper'>
                            <img src={program.image} alt={program.title} />
                        </div>
                    </figure>
                )
            }
        </div>
    )
}

export default ProgramCarousel;