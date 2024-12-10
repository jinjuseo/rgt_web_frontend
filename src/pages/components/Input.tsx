import React, { HTMLInputTypeAttribute } from 'react'

interface InputParams {
    type: HTMLInputTypeAttribute;
    name:string;
    value:string | number |undefined;
    label:string;
    blocked?:boolean;
    onChange?:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void; 
    length?:string;
    placeholder?:string;
}
const Input:React.FC<InputParams> = ({type,name,value,blocked,onChange,label,length, placeholder}) => {
  return (
    <div className="flex w-full justify-start items-center">
        <label htmlFor={name} className="min-w-20">{label}</label>
        <input 
        placeholder={placeholder}
        onChange={onChange} 
        className={`outline-none border-primary border-[1px] rounded-sm p-2 
            ${length==='sm' ? 'w-16' : length ==='md' ?'w-40' :'w-60'}
            `}
        id={name} name={name} type={type} value={value} disabled={blocked}/>
    </div>
    
  )
}

export default Input