import { HStack,Image } from "@chakra-ui/react"
import logo from '../assets/Logo/logo.webp'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='50px'/>
        <h1>Game Hub</h1>
    </HStack>
  )
}

export default NavBar