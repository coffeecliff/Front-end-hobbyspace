import{ StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { BorderRadius, Shadows, Spacing } from '../../design-system/tokens/spacing';
import { TextStyles } from '../../design-system/tokens/typography';
import { Subtitles } from 'lucide-react-native';
 
export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        paddingHorizontal: Spacing.xl,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 240,
        height: 240,
        marginBottom: Spacing.xl,
        ...Shadows.lg,
        shadowColor: colors.shadow,
    },
    inputContainer: {
        width: '100%',
    },
    title: {
        ...TextStyles.title,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: Spacing.sm,
        letterSpacing: -0.2,
        lineHeight: 26,
        textAlign: 'center',
    },
    subtitle: {
        ...TextStyles.body,
        color: colors.textSecondary,
        marginBottom: Spacing['4xl'],
        lineHeight: 22,
        textAlign: 'center',
    },
    loginButton: {
        marginBottom: Spacing.sm,
        marginTop: Spacing.xl,
        borderRadius: BorderRadius.lg,
    },
});
 