import React from 'react';
import PropTypes from 'prop-types'
import s from "./Section.module.css";

const Section = ({ title, children }) => (
    <section className={s.section}>
        <div className={s.container}>
            <h1 className={s.title}>
                {title}
            </h1>
            {children}
        </div>
    </section>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}

export default Section;