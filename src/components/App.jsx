import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let value of Object.values(this.state)) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / total
    );
    return positiveFeedbackPercentage;
  };

  // onLeaveFeedback = (label) =>
  //     [label]: state.label + 1;

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <GlobalStyle />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
