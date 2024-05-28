import './index.scss'
import projects from './projects'
import Project from '@components/Project'

function Projects() {
    return (
        <div className="projects__wrapper wrapper">
            <h2>My projects</h2>
            <div className="projects">{
                projects.map(project=>(
                    <Project
                        key={project.title}
                        {...project}
                    />
                ))
            }</div>
        </div>
    )
}

export default Projects