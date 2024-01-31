const InputGroup = ({ inputTitle }) => {
    return (
        <p>
            <label>{inputTitle}</label>
            <input type="number" required/>
        </p>
    );
};

export default InputGroup;