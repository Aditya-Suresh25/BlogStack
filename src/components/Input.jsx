//Forward reference hook is deprecated after React 19

import React, { useId, forwardRef } from 'react'

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props
}, ref) {
    const id = useId()

    const fileInputClasses =
        "file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"

    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input
                type={type}
                ref={ref}
                id={id}
                {...props}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${
                    type === "file" ? fileInputClasses : ""
                } ${className}`}
            />
        </div>
    )
});

export default Input