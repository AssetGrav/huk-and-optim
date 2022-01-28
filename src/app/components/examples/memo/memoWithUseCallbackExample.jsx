import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
// второй элемент стандартная фукция сверки ее можно написать свою
// например
// const MemoizedLogOutButton = React.memo(
//     LogOutButton,
//     (prevProps, nextProps) => {
//         if (prevProps === nextProps) return true;
//         return false;
//     }
// );
// function areEqual(prevState, nextState) {
//     if (prevState.onLogOut === nextState.onLogOut) {
//         return false;
//     }
//     return true;
// };
const MemoizedLogOutButton = React.memo(LogOutButton);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerander
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
