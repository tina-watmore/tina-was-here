import { useEffect, useState } from 'react';
import SkillsCarousel from '../components/SkillsCarousel';
import InterestCarousel from '../components/InterestCarousel';
import { fetchCommercialProjects, fetchHobbieProjects } from '../services/dataService';

export const Home = () => {
    const [commercialProjects, setCommercialProjects] = useState([]);
    const [hobbieProjects, setHobbieProjects] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('home-page');

        return () => {
            document.body.classList.remove('home-page');
        }
    }, []);

   useEffect(() => {
        getCommercialProjectsData();
        getHobbieProjectsData();
    }, []);   

    const getCommercialProjectsData = async () => {
        const data = await fetchCommercialProjects();
        setCommercialProjects(data);
    };    

    const getHobbieProjectsData = async () => {
        const data = await fetchHobbieProjects();
        setHobbieProjects(data);
    };  

    return (
        <main>
            <div className="content-section page-intro">
                <div className="container">
                    <img className="circle-image" src={`${import.meta.env.BASE_URL}tina-pic-01.png`}  alt="Tina" />
                    <div className="summary">
                        <h1 className="page-title">Hi, I'm Tina</h1>
                        <p>
                            A front-end web developer based in Sydney, Australia, I’m passionate about transforming great 
                            design into responsive, high-quality user experiences through clean and efficient code.
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <h2 className="section-title">Recent Work</h2>
                <h4 className="rich-text-subtitle">
                    <span className="highlight">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. <span className="highlight">Vestibulum volutpat orci quis ornare vulputate.</span> 
                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin eget sed purus. Sed sodales ultrices eleifend. 
                </h4>
                {
                    commercialProjects.length ? (
                        <>
                            <ul className="project-list">
                                {
                                    commercialProjects.map((project) => (
                                        <li className="project-card" key={project.id}>
                                            <a href="#">
                                                <img 
                                                    src={`${import.meta.env.BASE_URL}${project.image_path}`} 
                                                    alt={project.title} 
                                                    className="project-img" 
                                                />
                                                <div className="project-info">
                                                    <h3 className="project-name">{project.title}</h3>
                                                    <p className="project-details">{project.description}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                }                                                    
                            </ul>     
                            <div className="btn-container">
                                <a href="#" className="styled-lnk">
                                    <img className="fa-icon" src={`${import.meta.env.BASE_URL}/icons/arrow-right-solid.svg`} alt="" />
                                    <span>View all commercial projects</span>
                                </a>
                            </div>    
                        </>                                       
                    ) : (
                        <p>No commercial projects</p>                          
                    )
                }
            </div>
            <div className="content-section">
                <h2 className="section-title">Hobbie Projects</h2>
                <h4 className="rich-text-subtitle">
                    <span className="highlight">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. <span className="highlight">Vestibulum volutpat orci quis ornare vulputate.</span> 
                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin eget sed purus. Sed sodales ultrices eleifend. 
                </h4>   
                {
                    hobbieProjects.length ? (
                        <>
                            <ul className="hobbie-list">
                                {
                                    hobbieProjects.map((hobbie) => (
                                        <li className="item">
                                            <a href="#">
                                                <div className='img-container'>
                                                    <img 
                                                        src={`${import.meta.env.BASE_URL}${hobbie.image_path}`} 
                                                        alt={hobbie.title} 
                                                        className="hobbie-img" 
                                                    />
                                                </div>
                                                <div className="hobbie-info">
                                                    <h3 className="hobbie-name">{hobbie.title}</h3>
                                                    <p className="hobbie-details">
                                                        {hobbie.description}
                                                    </p>
                                                </div>
                                            </a>
                                        </li>   
                                    ))                                
                                }                                  
                            </ul>    
                            <div className="btn-container">
                                <a href="#" className="styled-lnk">
                                    <img className="fa-icon" src={`${import.meta.env.BASE_URL}/icons/arrow-right-solid.svg`} alt="" />
                                    <span>View all hobbie projects</span>
                                </a>
                            </div> 
                        </>                        
                    )  : (
                         <p>No hobbie projects</p>  
                    )
                }        
            </div>
            <div className="content-section">
                <h2 className="section-title">Skills</h2>
                <SkillsCarousel />
            </div>
            <div className="content-section">
                <h2 className="section-title">Other interests</h2>
                <h4 className="rich-text-subtitle">
                    <span className="highlight">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. <span className="highlight">Vestibulum volutpat orci quis ornare vulputate.</span> 
                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin eget sed purus. Sed sodales ultrices eleifend. 
                </h4>   
                <InterestCarousel />
            </div>            
        </main>
    );
}