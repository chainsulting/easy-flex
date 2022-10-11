import { AbsoluteSize, BorderRadius, BorderStyle, BorderWidth, Color, CssColor, CustomName, Falsifiable, Size } from '../types';
export interface BorderProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName> {
    /** Component's border color. */
    borderColor?: Falsifiable<Color<CustomColor>>;
    /** Component's border radius. */
    borderRadius?: Falsifiable<BorderRadius<CustomBorderRadius>>;
    borderStyle?: Falsifiable<BorderStyle>;
    /** Component's border width. */
    borderWidth?: Falsifiable<BorderWidth<CustomBorderWidth>>;
    round?: boolean;
}
export interface BorderStyleProps {
    'data-border-color'?: CssColor;
    'data-border-radius'?: Size;
    'data-border-style'?: BorderStyle;
    'data-border-width'?: AbsoluteSize;
}
export declare const useBorder: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`>({ borderColor, borderRadius, borderStyle, borderWidth, round, }: BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>) => {
    color: CssColor | undefined;
    radius: Size | undefined;
    style: BorderStyle | undefined;
    width: AbsoluteSize | undefined;
};
export declare const useBorderStyleProps: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`>(props: BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>) => BorderStyleProps;
export declare const borderStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<BorderStyleProps, any>>;
