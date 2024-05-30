import './index.scss';
import CustomButton from '@components/CustomButton';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { PiMatrixLogo } from "react-icons/pi";

function Contacts() {
    return (
        <div className="contacts__wrapper wrapper">
            <h2>Contacts</h2>
            <div className="contacts">
                <p className='contacts__text'>I need a job.</p>
                <div className="contacts__buttons">
                    <CustomButton
                        modifier='underlined'
                        link='mailto:filippov@mail.ch'
                    >
                        <CiMail /> filippov@mail.ch
                    </CustomButton>
                    <CustomButton
                        modifier='whatsapp'
                    >
                        <FaWhatsapp /> Not available rn
                    </CustomButton>
                    <CustomButton
                        modifier='matrix'
                        link='https://matrix.to/#/@cartaplassa:matrix.org'
                    >
                        <PiMatrixLogo /> @cartaplassa:matrix.org
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Contacts