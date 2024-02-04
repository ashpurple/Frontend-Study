import InputGroup from './InputGroup';

const UserInput = ({inputObject, onChange}) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <InputGroup
                    inputTitle={"inital Investment"}
                    inputValue={inputObject.initalInvestment}
                    onInputChange={onChange}
                />
                <InputGroup
                    inputTitle={"annual Investment"}
                    inputValue={inputObject.annualInvestment}
                    onInputChange={onChange}
                />
            </div>
            <div className="input-group">
                <InputGroup
                    inputTitle={"expected Return"}
                    inputValue={inputObject.expectedReturn}
                    onInputChange={onChange}
                />
                <InputGroup
                    inputTitle={"duration"}
                    inputValue={inputObject.duration}
                    onInputChange={onChange}
                />
            </div>
        </section>
    );
};

export default UserInput;