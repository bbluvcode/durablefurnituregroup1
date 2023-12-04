import Slider from "react-slick";

function BannerHome() {
    const bannerImages = [
        '/img/logo/Banner_home3.png',
        '/img/logo/Banner_home4.png',
        '/img/logo/Banner_home.png',
        '/img/logo/Banner_home2.png',
        '/img/logo/Banner_home5.png',
    ];
    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    return (
        <div className="mb-4 pb-5 banner mx-0 px-0">
            <div className="banner-home">
                <Slider {...bannerSettings}>
                    {bannerImages.map((image, index) => (
                        <div key={index}>
                            <img style={{ width: '100%' }} src={process.env.PUBLIC_URL + image} alt={`Banner ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default BannerHome;
