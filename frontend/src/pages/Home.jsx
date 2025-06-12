import { useEffect } from 'react';

export const Home = () => {

    useEffect(() => {
        document.body.classList.add('home-page');

        return () => {
            document.body.classList.remove('home-page');
        }
    }, []);

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
                <ul className="project-list">
                    <li className="project-card">
                        <a href="#">
                            <img 
                                src={`${import.meta.env.BASE_URL}/project-images/0001.jpg`} 
                                alt="This is a project name" 
                                className="project-img" 
                            />
                            <div className="project-info">
                                <h3 className="project-name">This is a project name</h3>
                                <p className="project-details">Corporate website</p>
                            </div>
                        </a>
                    </li>
                    <li className="project-card">
                        <a href="#">
                            <img 
                                src={`${import.meta.env.BASE_URL}/project-images/0002.jpg`} 
                                alt="This is a project name" 
                                className="project-img" 
                            />
                            <div className="project-info">
                                <h3 className="project-name">This is a project name</h3>
                                <p className="project-details">Charity website</p>
                            </div>
                        </a>
                    </li>
                    <li className="project-card">
                        <a href="#">
                            <img 
                                src={`${import.meta.env.BASE_URL}/project-images/0003.jpg`} 
                                alt="This is a project name" 
                                className="project-img" 
                            />
                            <div className="project-info">
                                <h3 className="project-name">This is a project name</h3>
                                <p className="project-details">Accountant website</p>
                            </div>
                        </a>
                    </li>
                    <li className="project-card">
                        <a href="#">
                            <img 
                                src={`${import.meta.env.BASE_URL}/project-images/0004.jpg`} 
                                alt="This is a project name" 
                                className="project-img" 
                            />
                            <div className="project-info">
                                <h3 className="project-name">This is a project name</h3>
                                <p className="project-details">Event website</p>
                            </div>
                        </a>
                    </li>                                                            
                </ul>
                <div className="btn-container">
                    <a href="#" className="styled-lnk">
                        <img className="fa-icon" src={`${import.meta.env.BASE_URL}/icons/arrow-right-solid.svg`} alt="" />
                        <span>View all projects</span>
                    </a>
                </div>
            </div>
            <div className="content-section">
                <h2 className="section-title">Hobbie Projects</h2>
                <h4 className="rich-text-subtitle">
                    <span className="highlight">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. <span className="highlight">Vestibulum volutpat orci quis ornare vulputate.</span> 
                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin eget sed purus. Sed sodales ultrices eleifend. 
                </h4>   
                <ul className="hobbie-list">
                    <li className="item">
                        <a href="#">
                            <div className='img-container'>
                                <img 
                                    src={`${import.meta.env.BASE_URL}/hobbie-images/0001.png`} 
                                    alt="This is a hobbie name" 
                                    className="hobbie-img" 
                                />
                            </div>
                            <div className="hobbie-info">
                                <h3 className="hobbie-name">This is a hobbie name</h3>
                                <p className="hobbie-details">
                                     Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                     eget sed purus. Sed sodales ultrices eleifend.
                                </p>
                            </div>
                        </a>
                    </li>   
                    <li className="item">
                        <a href="#">
                            <div className='img-container'>
                                <img 
                                    src={`${import.meta.env.BASE_URL}/hobbie-images/0002.png`} 
                                    alt="This is a hobbie name" 
                                    className="hobbie-img" 
                                />
                            </div>
                            <div className="hobbie-info">
                                <h3 className="hobbie-name">This is a hobbie name</h3>
                                <p className="hobbie-details">
                                     Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                     eget sed purus. Sed sodales ultrices eleifend.
                                </p>
                            </div>
                        </a>
                    </li> 
                    <li className="item">
                        <a href="#">
                            <div className='img-container'>
                                <img 
                                    src={`${import.meta.env.BASE_URL}/hobbie-images/0003.png`} 
                                    alt="This is a hobbie name" 
                                    className="hobbie-img" 
                                />
                            </div>
                            <div className="hobbie-info">
                                <h3 className="hobbie-name">This is a hobbie name</h3>
                                <p className="hobbie-details">
                                     Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                     eget sed purus. Sed sodales ultrices eleifend.
                                </p>
                            </div>
                        </a>
                    </li>                                          
                </ul>             
            </div>
            <div className="content-section">
                <h2 className="section-title">Other interests</h2>
                <h4 className="rich-text-subtitle">
                    <span className="highlight">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. <span className="highlight">Vestibulum volutpat orci quis ornare vulputate.</span> 
                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin eget sed purus. Sed sodales ultrices eleifend. 
                </h4>   
                <ul className="interests-list">
                    <li className="item">
                        <a href="#">
                            <div className='img-container'>
                                <img 
                                    src={`${import.meta.env.BASE_URL}/hobbie-images/0001.png`} 
                                    alt="This is a hobbie name" 
                                    className="hobbie-img" 
                                />
                            </div>
                            <div className="hobbie-info">
                                <h3 className="hobbie-name">Video Editing</h3>
                                <p className="hobbie-details">
                                     Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                     eget sed purus. Sed sodales ultrices eleifend.
                                </p>
                            </div>
                        </a>
                    </li>   
                    <li className="item">
                        <a href="#">
                            <div className='img-container'>
                                <img 
                                    src={`${import.meta.env.BASE_URL}/hobbie-images/0002.png`} 
                                    alt="This is a hobbie name" 
                                    className="hobbie-img" 
                                />
                            </div>
                            <div className="hobbie-info">
                                <h3 className="hobbie-name">Photography</h3>
                                <p className="hobbie-details">
                                     Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                     eget sed purus. Sed sodales ultrices eleifend.
                                </p>
                            </div>
                        </a>
                    </li> 
                    <li className="item">
                        <a href="#">
                            <div className='img-container'>
                                <img 
                                    src={`${import.meta.env.BASE_URL}/hobbie-images/0003.png`} 
                                    alt="This is a hobbie name" 
                                    className="hobbie-img" 
                                />
                            </div>
                            <div className="hobbie-info">
                                <h3 className="hobbie-name">Travel</h3>
                                <p className="hobbie-details">
                                     Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                     eget sed purus. Sed sodales ultrices eleifend.
                                </p>
                            </div>
                        </a>
                    </li>                                          
                </ul>             
            </div>            
        </main>
    );
}