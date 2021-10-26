import { Stack, HStack, Text } from "@chakra-ui/react"

const HeadingNumb = ({ number, children }) => {
    return (
        <Stack
        align={{ base: 'center', sm: 'baseline', md: 'baseline' }}
        //   marginLeft={{ base: '0', sm: '30px' }}
      >
        <HStack mb={{base: "8", lg:'0'}} mt={{base: '0',md:'10'}}>
          <Text fontSize="2xl" color="#686868" fontWeight="700" pr={2}>
            {number}
          </Text>
          <Text
            fontSize="2xl"
            color="white"
            style={{
              wordSpacing: '5px',
              letterSpacing: '2px',
            }}
          >
            {children}
          </Text>
        </HStack>
      </Stack>
    )
}

export default HeadingNumb
