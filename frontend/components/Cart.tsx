import UseTheme, { ColorScheme } from "@/hooks/useTheme"
import {View, Text, StyleSheet} from 'react-native'

const Cart = () => {
    const {colors} = UseTheme()
    const styles = createStyles(colors)
    return (
        <View style={styles.container}>
            <Text style={{color: colors.text}}>
                Cart goes here
            </Text>
        </View>
        )
}


const createStyles = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            padding: 20
        }
    })
    return styles
}

export default Cart
