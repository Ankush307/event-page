import React from 'react';

const NestedLoop = () => {
    const xaxis = 7;
    const yaxis = 7;
    const createPattern = () => {
        let pattern = [];
        for (let i = 0; i < xaxis; i++) {
            let row = [];
            for (let i = 0; i < yaxis; i++) {
                row.push('*');
            }
                pattern.push(row);
        };
        return pattern;
    };
    const pattern = createPattern();
    return (
        <div className='flex items-center justify-center flex-col py-10'>
            <h2 className='text-center text-xl font-bold text-neutural py-5'>Stars</h2>
            <p>
                {pattern.map((row, i) => (
                    <div key={i}>{row.join(' ')}</div>
                ))}
            </p>
        </div>
    );
};

export default NestedLoop;
