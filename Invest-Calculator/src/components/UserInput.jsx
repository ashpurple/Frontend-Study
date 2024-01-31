import InputGroup from "./InputGroup";

const UserInput = () => {
    return (
        <section id="user-input">
            <div className="input-group">
                <InputGroup inputTitle={"INITIAL INVESTMENT"} />
                <InputGroup inputTitle={"ANNUAL INVESTMENT"} />
            </div>
            <div className="input-group">
                <InputGroup inputTitle={"EXPECTED RETURN"} />
                <InputGroup inputTitle={"DURATION"} />
            </div>
        </section>
    );
};

export default UserInput;