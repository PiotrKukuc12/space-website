import { motion } from 'framer-motion'
import { chakra, shouldForwardProp  } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0 }) => {
    return (
    <StyledDiv
    initial={{ y:10, opacity: 0 }}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay}}
    >
        {children}
    </StyledDiv>
    )
}

const PlanetAnimation =({children, delay}) => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4
            },
          },
        }}
      >
      {children}
      </motion.div>
    )
}

export {Section, PlanetAnimation}