import { useDispatch, useSelector } from "react-redux";
import ProgramCarousel from "../component/programCarousel/ProgramCarousel";
import { useEffect } from "react";
import { getProgramList } from "../api/program";
import { AppDispatch } from "../redux";
import { selectProgramList, moveLeft, moveRight } from "../redux/programList.slice";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const programListState = useSelector(selectProgramList);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            dispatch(moveLeft());
        } else if (e.key === 'ArrowRight') {
            dispatch(moveRight());
        } else if (e.key === 'Enter') {

        }
    };

    // load program list
    useEffect(() => {
        if (programListState.data.length <= 0)
            dispatch(getProgramList());
    }, []);

    // handle key action
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])

    return <ProgramCarousel {...programListState} />
}

export default Home;