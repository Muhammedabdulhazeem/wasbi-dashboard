import { FiChevronDown } from 'react-icons/fi'

export const Option = ({name, icon, arrow, className}) => {
    return(
        <div className='flex items-center'>
            <div className="flex sm:space-x-1 space-x-3 items-center">
                {icon && (
                    <div className='h-6 w-6'>
                        {icon}
                    </div>
                )}
                <p className={`${className} cursor-pointer hover:scale-110 hover:text-black`}>{name}</p>
            </div>
            {arrow && (
                <div className='sm:h-5 sm:w-5 h-6 w-6 ml-auto'>
                    <FiChevronDown className='w-full h-full' />
                </div>
            )}
        </div>
    )
}