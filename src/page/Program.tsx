import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { selectProgramList } from "../redux/programList.slice";
import { PATH } from "../const";
import SingleProgram from "../component/program/SingleProgram";
import { AppDispatch } from "../redux";
import { getProgramList } from "../api/program";

const Program = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    let { id } = useParams();
    const programListState = useSelector(selectProgramList);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Backspace')
            navigate(PATH.HOME);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])

    useEffect(() => {
        if (programListState.data.length <= 0)
            dispatch(getProgramList(id));
    }, []);

    return <SingleProgram {...programListState} />
}

export default Program;