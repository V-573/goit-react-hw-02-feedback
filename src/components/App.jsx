import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';




class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = Prop => {
    this.setState(prevState => ({ [Prop]: prevState[Prop] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };



  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    

    return (
    
        
     
        <Section>



 <p>Please leave feedback</p>
          <FeedbackOptions
          estado={ this.state}
          handleIncrement={this.handleIncrement} // en este caso se pasa una referencia de funcion, no se llama en ese momento a la funcion.
          // la funcion se llama desde el componente hijo en donde se utiliza un manejador de eventos onClick que hace el llamado a la funcion
            />
      

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalF={totalFeedback}
            positivePerce={positivePercentage}
            />

        
        </Section>
        );
}
}

    
    
  


export default App;
