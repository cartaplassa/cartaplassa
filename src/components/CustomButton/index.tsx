import { IconContext } from 'react-icons';
import './index.scss'
import { ReactNode } from 'react';

type CustomButtonProps = {
    link?: string;
    modifier?: string;
    className?: string;
    children?: ReactNode;
}

function CustomButton({
    link,
    modifier,
    className,
    children
}: CustomButtonProps) {
    let newClassName = 'btn';
    newClassName += modifier ? ` btn--${modifier}` : '';
    newClassName += className ? ` ${className}` : '';
    return (
        <IconContext.Provider value={{
            size: ".7em"
        }}>
            <a className={newClassName} href={link}>
                {children}
            </a>
        </IconContext.Provider>
    )
}

export default CustomButton;