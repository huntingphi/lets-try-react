import React from 'react';

// const App = () => <h1>Hello World</h1>

class App extends React.Component{
  render(){
    // let txt = this.props.txt
    // let txt = this.props.txt
    let txt = this.props.txt
    // let txt =

    return <h1>this.props.txt</h1>
    // return React.createElement('h1',null,'Sup');//<h1 className = "">Hello World</h1>
  }
}

export class Blink extends React.Component{
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    },1000);
    }

    render(){
      let display = this.state.showText ? this.props.text : ' ';
      // var Text;
      return(
        <p>{display}</p>
      );
    }
  }


  // export default Blink;
  export default App