import { TouchableOpacity} from 'react-native'
import Arrow from '@assets/arrow-left.svg'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
export function BackButton({...rest}){
    const navigation = useNavigation()
    return(
        <Button
        zIndex={5} 
        w={20}
        h={20} 
        variant='unstyled' 
        mt='70px'
        onPress={()=>navigation.goBack()}
        {...rest}
        >
            <Arrow width={20} height={20}/>
        </Button>
    )
}