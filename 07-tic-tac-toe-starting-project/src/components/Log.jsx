const Log = ({ turns }) => {
    console.log("turns", turns);
    // console.log(turns.map(turn => {
    //         console.log(turn.square.row, turn.square.col);
    //     }));
    return (
        <ol id="log">
            {turns.map(turn => (
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
            ))}
        </ol>
    );
};

export default Log