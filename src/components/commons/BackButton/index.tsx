import { Platform, TouchableOpacity} from 'react-native'
import Arrow from '@assets/arrow-left.svg'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
export function BackButton({...rest}){
    const navigation = useNavigation()
    return(
        <Button
        zIndex={5} 
        w={20}
        h={20} 
        variant='unstyled' 
        mt={Platform.OS==='ios'?getStatusBarHeight():30}
        onPress={()=>navigation.goBack()}
        {...rest}
        >
            <Arrow width={20} height={20}/>
        </Button>
    )
}