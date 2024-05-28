import { IconContext } from 'react-icons';
import './index.scss'
import { ReactNode } from 'react';

type CustomButtonProps = {
    link: string;
    modifier?: string;
    children: ReactNode;
}

function CustomButton({
    link,
    modifier,
    children
}: CustomButtonProps) {
    return (
        <IconContext.Provider value={{
            size: ".7em"
        }}>
            <a className={
                    modifier ?
                    'btn btn--'+modifier :
                    'btn'
                }
                href={link}
            >
                {children}
            </a>
        </IconContext.Provider>
    )
}

export default CustomButton;