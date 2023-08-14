import { Component } from "react";

class ClassEvent extends Component
{
    constructor(props)
    {
        super(props);
        this.name = props.name;
    }

    handleClick = () =>
    {
        alert(this.name);
        console.log(this);
    }

    render()
    {
         
        return <div>
            This is a class based component
            <button onClick={this.handleClick}>Click Me</button>
        </div>
    }
}

export default ClassEvent;