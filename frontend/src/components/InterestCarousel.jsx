import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const InterestCarousel = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="interest-carousel"
            >
                <SwiperSlide>
                    <a href="#">
                        <img 
                            src={`${import.meta.env.BASE_URL}/interest-images/0001.png`} 
                            alt="This is a interest name" 
                            className="interest-img" 
                        />   
                        <div className="interest-info">
                            <h3 className="interest-name">Video Editing</h3>
                            <p className="interest-details">
                                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                    eget sed purus. Sed sodales ultrices eleifend.
                            </p>
                        </div>                             
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <img 
                            src={`${import.meta.env.BASE_URL}/interest-images/0002.png`} 
                            alt="This is a interest name" 
                            className="interest-img" 
                        />   
                        <div className="interest-info">
                            <h3 className="interest-name">Photography</h3>
                            <p className="interest-details">
                                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                    eget sed purus. Sed sodales ultrices eleifend.
                            </p>
                        </div>                             
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <img 
                            src={`${import.meta.env.BASE_URL}/interest-images/0003.png`} 
                            alt="This is a interest name" 
                            className="interest-img" 
                        />   
                        <div className="interest-info">
                            <h3 className="interest-name">Travel</h3>
                            <p className="interest-details">
                                    Curabitur bibendum vel nulla id efficitur. Nullam vel nisi sed est tincidunt sollicitudin 
                                    eget sed purus. Sed sodales ultrices eleifend.
                            </p>
                        </div>                             
                    </a>
                </SwiperSlide>                                
            </Swiper>
        </>            
    )
} 

export default InterestCarousel;