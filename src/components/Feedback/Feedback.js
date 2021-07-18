import React, { Component } from 'react';
import Section from "../Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import PropTypes from 'prop-types';

export default class Feedback extends Component {
    static defaultProps = {
        initialValueGood: 0,
        initialValueNeutral: 0,
        initialValueBad: 0,
    };
    static props = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }
    
    state = {
        good: this.props.initialValueGood,
        neutral: this.props.initialValueNeutral,
        bad: this.props.initialValueBad,
    };
    
    addFeedback = e => {
        const feedbackName = e.target.textContent;
		this.setState((prevState) => ({
			[feedbackName]: prevState[feedbackName] + 1
		}));
	};

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad);
    };
    

    countPositiveFeedbackPercentage = () => (
        Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
    
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.addFeedback}
                    />
                </Section>
                <Section
                    title="Statistics"
                >
                    {this.countTotalFeedback() > 0
                        ? <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
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
    
