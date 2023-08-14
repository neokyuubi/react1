function FunctionEvent(props)
{
    const {name} = props;

    function handleClick()
    {
        alert(name)
    }

    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

export default FunctionEvent;