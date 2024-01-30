import { Component } from 'react';
import ShowInfo from "./ShowInfo";
import AddBtn from './AddBtn';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };

  handleIncrement = (Prop) => {
    
    this.setState((prevState) => ({ [Prop]: prevState[Prop] + 1 }));

  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  
  
}

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);

  }



  render() {
    
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();




    return (
  


      <>
        
           <p>Please leave feedback </p> 
            
            <div>

    <AddBtn  addOne={() =>  this.handleIncrement('good')} count={good} title='Good' />
    <AddBtn  addOne={() =>  this.handleIncrement('neutral')} count={neutral} title='Neutral' />
    <AddBtn  addOne={() =>  this.handleIncrement('bad')} count={bad} title='Bad' />
  

            </div>
   
    <div style={{display: "flex", flexDirection: "column" }}>
        <h2>Statistics</h2>
        
           
 
           <span>{`Good: ${good}` }</span>     
          <span>{ `Neutral ${neutral}`}</span>     
          <span>{`Bad ${bad}`}</span> 
          <span>{`Total: ${ totalFeedback }`}</span>
          <span>{`Positive Feedback: ${positivePercentage}%`}</span>
          


        </div>
    
    </>
    
    )
};
};


export default App;