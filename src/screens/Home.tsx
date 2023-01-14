import { CoursesCarousel } from "@components/commons/CoursesCarousel";
import { MainCarousel } from "@components/pageComponents/MainCarousel";
import { Text, VStack } from "native-base";
import Bg from '@assets/react.png'
import Bg2 from '@assets/css.png'

export function Home(){
    const coursesData = [{
        image: Bg,
        couseId: 0,
        title: 'JavaScript:programando a Orientação a Objetos',
        author:'kaio geglio',
    },
    {
        image: Bg2,
        couseId: 0,
        title: 'Flexbox ',
        author:'kaio geglio',
    },
    {
        image: Bg2,
        couseId: 0,
        title: 'Flexbox ',
        author:'kaio geglio',
    },

    ]
    return(
        <VStack  flex={1} >
            <MainCarousel/>
            <CoursesCarousel
            carouselTitle="Continue assistindo"
            data={coursesData}

            />
             <CoursesCarousel
            carouselTitle="Continue assistindo"
            data={coursesData}

            />
        </VStack>
    )
}