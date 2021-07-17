import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
    <ul>
        {
            options.map(option =>
                <li key={option}>
                    <button type="button" onClick={onLeaveFeedback}>
                        {option}
                    </button>
                </li>
            )
        }
    </ul>;

export default FeedbackOptions;