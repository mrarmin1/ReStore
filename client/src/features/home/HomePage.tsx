
import { Box, Typography } from "@material-ui/core";
import Slider from "react-slick";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e.png' alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
                </div>
                <div>
                    <img src='https://www.impactplus.com/hubfs/homepage-design-tips.jpg' alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
                </div>
            </Slider>
            <Box display='flex' justifyContent='center' sx={{p: 4}} >
                <Typography variant='h1'>Welcome</Typography>
            </Box>
        </>
    )
}