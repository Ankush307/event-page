import React, { useState } from 'react';

const Arguments = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [answer, setAnswer] = useState(0);
    const addNumbers = (a, b) => {
        return Number(a) + Number(b);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const result = addNumbers(value1, value2);
        setAnswer(result);
    };

    return (
        <div className="flex items-center flex-col pt-10 pb-10 px-5">
            <h2 className="text-center font-bold text-3xl text-mirage-dark border-b-2 border-smokey-gray pb-1 mb-2"> Add Value</h2>
            <form className="border rounded-lg shadow-lg bg-white p-6 flex flex-col w-full max-w-[768px] mt-8" onSubmit={submitHandler}>
                <div className="md:flex items-center justify-center md:justify-between gap-4">
                    <input type="number" value={value1} onChange={(e) => setValue1(e.target.value)} className="flex-1 text-sm font-bold w-full outline-none border border-gray-300 rounded-lg p-4" placeholder="Enter first value" />
                    <p className="text-2xl font-bold text-gray-600 text-center">+</p>
                    <input type="number" value={value2} onChange={(e) => setValue2(e.target.value)} className="flex-1 text-sm font-bold w-full outline-none border border-gray-300 rounded-lg p-4" placeholder="Enter second value" />
                </div>
                <p className="text-lg text-mirage-dark mt-6 px-2 rounded-lg py-3 text-center bg-light-gray">{answer}</p>
                <button className="mt-5 form-btn-bg text-white rounded-lg py-3 font-semibold text-lg transition"> Calculate</button>
            </form>
        </div>

    );
};

export default Arguments;
