import React, { useState } from 'react'
import { AddIcon, DropIcon } from '../utils/icons';
import { DROPDOWN_LIST } from '../utils/helper';

const EventForm = () => {
    const [files, setFiles] = useState([]);
    const handleUpload = (event) => {
        const files = [...event.target.files];
        const newUploads = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setFiles((prev) => [...prev, ...newUploads]);
    };
    const [selectedOption, setSelectedOption] = useState('Kategorie');
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const formData = {
        name: "",
        email: "",
        standort: "",
        preis: "",
        details: "",
        select: "Kategorie"
    };

    const [value, setValue] = useState(formData);

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            value.name !== '' &&
            value.email !== '' &&
            value.standort !== '' &&
            value.preis !== '' &&
            value.details !== '' &&
            value.select
        ); {
            setValue(formData);
            console.log(value);
        };
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-ghost-white py-10'>
            <div className="container mx-auto max-w-[768px] max-md:px-5">
                <h1 className='font-bold sm:text-4xl text-3xl leading-[44px] tracking-[-2%] text-mirage-dark text-center'>Event einsenden</h1>
                <p className='text-[20px] font-light leading-[26px] sm:leading-[30px] text-center text-smokey-gray sm:py-5 py-4'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <form className='flex flex-wrap gap-4' onSubmit={submitHandler}>
                    <div className="flex gap-4 flex-wrap w-full bg-white border border-dashed rounded-[15px] sm:rounded-[30px] py-2 px-4 items-center">
                        {files.map((obj, i) => (
                            <div key={i} className="relative size-24 rounded-lg overflow-hidden">
                                <img src={obj.url} alt="uploded img" className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <label className="w-24 h-20 border border-dashed border-neutral rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all ease-linear duration-200">
                            <input type="file" className="hidden" onChange={handleUpload} />
                            <AddIcon />
                        </label>
                    </div>
                    <div className="relative w-full">
                        <div className="flex items-center cursor-pointer justify-between bg-white border-light-gray border rounded-[30px] py-[17.5px] px-4"
                            onClick={toggleDropdown}>
                            <p className="text-sm font-bold text-neutural leading-[21px]">{selectedOption}</p>
                            <p><DropIcon /></p>
                        </div>
                        {isOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-full z-10">
                                <ul className="py-2">
                                    {DROPDOWN_LIST.map((option) => (
                                        <li key={option} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-bold text-neutural leading-[21px]"
                                            onClick={() => handleOptionSelect(option)}> {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="lg:flex w-full gap-4">
                        <div className='flex flex-col lg:w-1/2 max-lg:mb-4'>
                            <input required value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })}
                                className='w-full text-sm font-bold border-light-gray border rounded-[15px] sm:rounded-[30px] text-smokey-gray outline-none py-[17.5px] px-4' placeholder='Titel' type="text" /></div>
                        <div className='lg:w-1/2 flex flex-col'>
                            <input required value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })}
                                className='w-full border-light-gray font-bold border rounded-[15px] sm:rounded-[30px] text-sm text-smokey-gray outline-none py-[17.5px] px-4' placeholder='Datum' type="text" />
                        </div>
                    </div>
                    <div className="lg:flex w-full gap-4">
                        <div className='flex flex-col lg:w-1/2 max-lg:mb-4'>
                            <input required value={value.standort} onChange={(e) => setValue({ ...value, standort: e.target.value })}
                                className='w-full border-light-gray font-bold border rounded-[15px] sm:rounded-[30px] text-sm text-smokey-gray outline-none py-[17.5px] px-4' placeholder='Standort' type="text" />
                        </div>
                        <div className='lg:w-1/2 flex flex-col'>
                            <input required value={value.preis} onChange={(e) => setValue({ ...value, preis: e.target.value })}
                                className='w-full border-light-gray font-bold border rounded-[15px] sm:rounded-[30px] text-sm text-smokey-gray outline-none py-[17.5px] px-4' placeholder='Preis' type="text" />
                        </div>
                    </div>
                    <textarea required value={value.details} onChange={(e) => setValue({ ...value, details: e.target.value })} name="text" placeholder='Details zur Veranstaltung' className='p-4 border-light-gray border placeholder:pt-[40px] bg-white text-smokey-gray text-sm font-bold w-full rounded-[15px] sm:rounded-[30px] resize-none outline-none min-h-[132px]'></textarea>
                    <div className='w-full justify-center flex'>
                        <button type="submit" className='form-btn-bg font-bold hover:scale-105  transition-all duration-500 text-white py-4 sm:px-[115.5px] px-24 rounded-[15px] sm:rounded-[30px]'>Event einsendens</button>
                    </div>
                </form>
            </div>
            <div>
            </div>
        </div >
    )
}

export default EventForm