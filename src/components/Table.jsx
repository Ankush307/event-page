import React from 'react'

const Table = () => {
    const TABLE = []
    for (let i = 1; i <= 10; i++) {
        TABLE.push(
            <p key={i}>
                2 × {i} = {2 * i}
            </p>
        )
    }

    return (
        <>
            <div className='flex items-center justify-center flex-col py-10'>
                <h2 className='sm:text-3xl text-2xl font-bold border-b-2 border-smokey-gray pb-1 mb-2 text-center'>Table</h2>
                <p className='text-xl font-normal text-neutural '>{TABLE}</p>
            </div>
        </>
    )
}

export default Table