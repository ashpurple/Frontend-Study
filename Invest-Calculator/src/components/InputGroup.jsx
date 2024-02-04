const InputGroup = ({ inputTitle, inputValue, onInputChange }) => {
    return (
        <p>
            <label>{inputTitle}</label>
            <input
                type="number"
                required
                value={inputValue}
                onChange={(event) => 
                    onInputChange(inputTitle.replace(' ',''), event.target.value)}
            />
        </p>
    );
};

export default InputGroup;