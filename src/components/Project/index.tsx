import './index.scss'
import ImageGallery from "react-image-gallery"
import Feature from '@components/Feature'
import CustomButton from '@components/CustomButton'
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { ProjectType } from '@pages/Projects/projects'
import { type ReactImageGalleryItem } from 'react-image-gallery';


function Project(props: ProjectType) {
    return (
        <div className="project">
            <div className="project__summary">
                <h3 className="project__title">{props.title}</h3>
                <div className="project__features">
                    {props.features.map(feature => (
                        <Feature
                            key={feature}
                            name={feature}
                        />
                    ))}
                </div>
                <p className="project__desc">{props.desc}</p>
                <div className="project__links">
                    <CustomButton link={props.links.source}>
                        <FaGithub /> Source
                    </CustomButton>
                    {
                        props.links.live?
                        <CustomButton
                            modifier='accent'
                            link={props.links.live}
                        >
                            <FaPlay /> Live
                        </CustomButton> :
                        <div />
                    }
                </div>
            </div>
            {
                Array.isArray(props.img) ?
                <div className="project__img">
                    <ImageGallery
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        autoPlay={true}
                        items={props.img.map(
                            image=>({
                                original: image,
                                thumbnail: image
                            } as ReactImageGalleryItem)
                        )}
                    />
                </div> :
                <div className="project__img">
                    <ImageGallery
                        showNav={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={false}
                        autoPlay={true}
                        items={[{
                                original: props.img,
                                thumbnail: props.img
                        } as ReactImageGalleryItem]}
                    />
                </div>
            }
        </div>
    )
}

export default Project