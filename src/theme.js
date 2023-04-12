import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        body: `'Poppins', sans-serif`,
        heading: `'Poppins', sans-serif`,
        cardFont: `'Abril Fatface', sans-serif`,
        barcode: `'Libre Barcode 39'`
      },
})

export default theme