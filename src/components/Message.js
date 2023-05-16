import { Component } from "react";

class Message extends Component
{
    dem = "Matrixo";

    myCal = () =>
    {
        return "from calc ! " + this.dem ;
    };

    render()
    {
        return <h1>this is a class component Message from {this.dem} {this.myCal()}</h1>;
    };
}

export default Message;