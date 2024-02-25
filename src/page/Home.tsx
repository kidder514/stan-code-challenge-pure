import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProgramCarousel from "../component/programCarousel/ProgramCarousel";
import { AppDispatch } from "../redux";
import { selectProgramList, moveLeft, moveRight } from "../redux/programList.slice";
import { PATH } from "../const";
import { getProgramList } from "../api/program";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const programListState = useSelector(selectProgramList);
    const programListStateRef = useRef(programListState);
    programListStateRef.current = programListState;

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            dispatch(moveLeft());
        } else if (e.key === 'ArrowRight') {
            dispatch(moveRight());
        } else if (e.key === 'Enter') {
            const { data, indexSelected } = programListStateRef.current;
            if (data.length && indexSelected !== undefined)
                navigate(`${PATH.PROGRAM}/${data[indexSelected].id}`);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])


    useEffect(() => {
        if (programListState.data.length <= 0)
            dispatch(getProgramList());
    }, []);

    return <ProgramCarousel {...programListState} />
}

export default Home;