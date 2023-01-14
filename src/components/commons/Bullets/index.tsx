import { Box } from "native-base";

interface BulletProps{
    active:boolean
}

export function Bullet({active}:BulletProps){
  return (
    <Box
    mx='5px' 
    w='40px'
    h='5px'
    bg={'white.900'}
    opacity={active?1:'0.4'}
    />
    
    
  );
}