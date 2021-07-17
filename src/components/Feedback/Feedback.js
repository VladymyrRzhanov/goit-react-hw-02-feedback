import React, { Component } from 'react';
import Section from "../Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";


export default class Feedback extends Component {
    static defaultProps = {
        initialValueGood: 0,
        initialValueNeutral: 0,
        initialValueBad: 0,
    };

    state = {
        good: this.props.initialValueGood,
        neutral: this.props.initialValueNeutral,
        bad: this.props.initialValueBad,
    };
    
    addGoodFeedback = () => {
        this.setState(prevState => (
            {
                good: prevState.good + 1
            }
        ));
    };

    addNeutralFeedback = () => {
        this.setState(prevState => (
            {
                neutral: prevState.neutral + 1
            }
        ));
    };

    addBadFeedback = () => {
        this.setState(prevState => (
            {
                bad: prevState.bad + 1
            }
        ));
    };

    countTotalFeedback = () => (
            this.state.good + this.state.neutral + this.state.bad
    );
    

    countPositiveFeedbackPercentage = () => (
            Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
    
    render() {
        return (
            <>
                <Section title="Please leave feedback">
                        <FeedbackOptions
                        options={['Good','Neutral','Bad']}
                        onLeaveFeedback={this.addGoodFeedback}
                    />
                </Section>
                <Section
                    title="Statistics"
                >
                    {this.countTotalFeedback() > 0
                        ? <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                        : <Notification
                            message="No feedback given"
                        />
                    }
                </Section>
            </>
        );
    };
};
    
