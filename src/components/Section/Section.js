import React from 'react';

const Section = ({ title, children }) => (
    <section>
        <div>
            <h1>
                {title}
            </h1>
            {children}
        </div>
    </section>
);

export default Section;