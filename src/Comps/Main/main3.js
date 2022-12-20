
import  SimpleSlider1  from './Car/Carousel1'

export const Main3 = ({main1}) => {
    
        return(
            <div className='main1'  style={main1 ? css.main1 : css.main1hiding }>
                    <SimpleSlider1/>
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
            transition: '1s',
        },

        main1hiding:{
            // back
            opacity: '0',
            transition: '1s',

        }
    }