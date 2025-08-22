import UseTheme, { ColorScheme } from "@/hooks/useTheme"
import {View, Text, StyleSheet} from 'react-native'

const Proceed = () => {
    const {colors} = UseTheme()
    const styles = createStyles(colors)
    return (
        <View style={styles.container}>
            <Text style={{color: colors.text}}>
                Proceed goes here
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

export default Proceed
