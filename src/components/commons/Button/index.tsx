import { Button as ButtonNativeBase, HStack, IButtonProps, Icon, IIconProps, PlayIcon, Text } from "native-base"
interface Props extends IButtonProps {
    title: string;
    w?:string;
    icon?:React.ReactNode
    border?:boolean,
    color?:string;
}
export function Button({ title,w='full', variant='solid',icon,border=false,color,...rest}: Props) {
    return (
        <ButtonNativeBase
        w={w}
       
        bg={variant === 'outline' ? 'black.900' : 'white.900'}
        borderWidth={1}
        borderColor={variant === 'outline' ?'white.900'  : 'transparent'}
        rounded={border?"sm":"none"}
        _pressed={{
          bg: variant === 'outline' ? 'gray.500' : 'gray.500'  
        }}
        {...rest}
      >
        <HStack justifyContent='center' alignItems='center' space='10px'>
        <Text 
          color={variant === 'outline' ? 'white.900' : 'black.900'}
          fontFamily="heading"
          fontWeight='bold'
          fontSize="sm"
          
        >
                {title}
            </Text>
            {
              icon  
              
            }
            </HStack>
        </ButtonNativeBase>
    )
}