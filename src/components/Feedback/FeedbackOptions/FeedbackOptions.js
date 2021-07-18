import React from 'react';
import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
    <ul className={s.list}>
        {
            options.map(option =>
                <li key={option} className={s.item}>
                    <button className={s.button} type="button" onClick={e => onLeaveFeedback(e)}>
                        {option}
                    </button>
                </li>
            )
        }
    </ul>;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;