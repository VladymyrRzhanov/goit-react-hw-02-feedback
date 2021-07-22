import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.list}>
    <li className={s.item}>Good: {good}</li>
    <li className={s.item}>Neutral: {neutral}</li>
    <li className={s.item}>Bad: {bad}</li>
    <li className={s.item}>
      <span className={s.total}>Total: {total}</span>
    </li>
    <li className={s.itemPercent}>
      Positive feedback: {total > 0 ? positivePercentage : 0}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
