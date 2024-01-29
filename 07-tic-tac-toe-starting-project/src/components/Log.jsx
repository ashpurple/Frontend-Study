const Log = ({ turns }) => {
    return (
        <ol id="log">
            {turns.map(turn => (
            <li key={`${turn.square.log}${turn.square.col}`}>
                {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
            ))}
        </ol>
    );
};

export default Log