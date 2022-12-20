
import  SimpleSlider  from './Car/Carousel'

export const Main1 = ({main}) => {
    console.log(main);
        return(
            <div className='main1'  style={main ? css.main1 : css.main1hiding }>
                    <SimpleSlider/>
            </div>
        )

    }




    const css = {
        main1:{position: 'relative',
            top: '90px',
            height: 'auto',
            paddingBottom: '120px',
            marginTop: '50px',
            marginBottom: '20px',
            transition: '1s'
        },

        main1hiding:{
            // back
            opacity: '0',
            transition: '1s',

        }
    }










{/* <img className="durs" src={llll} onClick={soli}></img>
<img className="img1" src='https://wallpaper.dog/large/10811387.png'></img> */}