 import {Component} from 'react';

 export default class Clock extends Component{
    // Behaviour
    tick(){
        this.setState({ date : new Date() });
    }

    stateHandle = () => {
        console.log("stateHandle sets the time as :" + this.state.date);
        this.setState({
            text: "Updated"
        });
    };
    
    stateHandle2 = () => {
        console.log("stateHandle2 sets the time as :" + this.state.date);
        clearInterval(this.timerID);
        this.setState({
            text: "Updated and timer has stopped"
        });
    };
    
    shouldHandle = () => {
        console.log("shouldHandle sets the time as :" + this.state.date);
        this.timerID = setInterval(() => this.tick(), 1000);
    };

    // Mounting
    constructor(props){
        super(props)

        this.state = {
            date: new Date(), 
            text: "Default", 
            boolForShould: true
        }

        console.log("Constructor sets the time as : "+ this.state.date.getMilliseconds());
    }

    componentWillMount(){
        console.log(`ComponentWillMount sets the time as` + this.state.date.getMilliseconds());
    }

    componentDidMount() {
        console.log("componentDidMount sets the time as :" + this.state.date.getMilliseconds());
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // Render - Happens many times
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.stateHandle}> Changes State </button>
                <button onClick={this.stateHandle2}> Obliterate </button>
                <button onClick={this.shouldHandle}> Start </button>
            </div>
        );
    }
    // Update
    componentWillUpdate() {
        console.log("componentWillUpdate sets the time as :" + this.state.date.getMilliseconds());
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate sets the time as :" + this.state.date);
        return this.state.boolForShould;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate sets the time as :" + this.state.date);
    }
    
    // Unmount
    componentWillUnmount() {
        console.log("componentWillUnmount sets the time as :" + this.state.date);
        clearInterval(this.timerID);
    }
    
    
 }