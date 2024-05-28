import './index.scss'
import { IconContext, IconType } from "react-icons";
import { FaReact } from "react-icons/fa"
import { IoLogoPwa } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChrome } from "react-icons/fa6";
import { FaFirefox } from "react-icons/fa6";

type AllowedFeature = 
    'python' |
    'telegram' |
    'react' |
    'typescript' |
    'chakraui' |
    'pwa' |
    'chrome' |
    'firefox';

type FeatureComponentInterface = {[key in AllowedFeature]: IconType}

// const icons: FeatureComponentInterface = {
//     python: <FaPython />,
//     telegram: <FaTelegramPlane />,
//     react: <FaReact />,
//     typescript: <BiLogoTypescript />,
//     chakraui: <SiChakraui />,
//     pwa: <IoLogoPwa />,
//     chrome: <FaChrome />,
//     firefox: <FaFirefox />
// }

const icons: FeatureComponentInterface = {
    python: FaPython,
    telegram: FaTelegramPlane,
    react: FaReact,
    typescript: BiLogoTypescript,
    chakraui: SiChakraui,
    pwa: IoLogoPwa,
    chrome: FaChrome,
    firefox: FaFirefox
}

function sanitizeFeature(name: string): AllowedFeature {
    const sanitizedName = name.toLowerCase().replace(/\s+/g, "");
    if (!Object.keys(icons).includes(sanitizedName)) {
        throw new Error('Invalid string');
    }
    return sanitizedName as AllowedFeature
}

function Feature({name}: {name: string}) {
    const sanitizedFeature = sanitizeFeature(name);
    const Icon = icons[sanitizedFeature];
    return (
        <IconContext.Provider value={{
            size: "1em"
        }}>
            <div className={'feature feature--' + sanitizedFeature}>
                <Icon />
                <span className='feature__text'>{name}</span>
            </div>
        </IconContext.Provider>
    )
}

export default Feature