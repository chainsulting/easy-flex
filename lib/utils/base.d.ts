import { AbsoluteSize, BorderRadius, Color, CssColor, CssFontWeight, CssLineHeight, DeepPartial, Distance, EasyFlexTheme, ElementSize, FontSize, FontWeight, Height, LineHeight, Percent, Px, Rem, Size, ThemeColor, ThemeSize, Vh, ViewportThreshold, Vw, Width } from '../types';
export declare const mergeDeep: <T>(a: T, b: DeepPartial<T>) => T;
export declare const isThemeColor: (color: Color) => color is ThemeColor;
export declare const isThemeSize: (size: unknown) => size is ThemeSize;
export declare const isPercent: (value: unknown) => value is `${number}px`;
export declare const isPx: (value: unknown) => value is `${number}px`;
export declare const isRem: (value: unknown) => value is `${number}rem`;
export declare const isVh: (value: unknown) => value is `${number}vh`;
export declare const isVw: (value: unknown) => value is `${number}vw`;
export declare const isAbsoluteSize: (value: unknown) => value is AbsoluteSize;
export declare const isSize: (value: unknown) => value is Size;
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, null | undefined>) => U) => T extends never ? U | null | undefined : T extends null ? U | null : T extends undefined ? U | undefined : U;
export declare const ifNotDefined: <T, U>(value: T, fn: (value: null | undefined) => U) => T extends null | undefined ? U : T;
export declare const ifNotNull: <T, U>(value: T, fn: (value: Exclude<T, null>) => U) => T extends null ? null : U;
export declare const ifNotUndefined: <T, U>(value: T, fn: (value: Exclude<T, undefined>) => U) => T extends undefined ? undefined : U;
export declare const ifUndefined: <T, U>(value: T, fn: () => U) => T extends undefined ? U : T;
export declare const toPercent: (value: number) => Percent;
export declare const toPx: (value: number) => Px;
export declare const toRem: (value: number) => Rem;
export declare const toVh: (value: number) => Vh;
export declare const toVw: (value: number) => Vw;
export declare const percentToNumber: (value: Percent) => number;
export declare const pxToNumber: (value: Px) => number;
export declare const remToNumber: (value: Rem) => number;
export declare const vhToNumber: (value: Vh) => number;
export declare const vwToNumber: (value: Vw) => number;
export declare const absoluteSizeToNumber: (value: AbsoluteSize) => number;
export declare const sizeToNumber: (value: Size) => number;
export declare const getBorderRadius: (theme: EasyFlexTheme, borderRadius: BorderRadius | AbsoluteSize) => AbsoluteSize;
export declare const getBorderWidth: (theme: EasyFlexTheme, borderWidth: BorderRadius | AbsoluteSize) => AbsoluteSize;
export declare const getColor: (theme: EasyFlexTheme, color: Color) => CssColor;
export declare const getDistance: (theme: EasyFlexTheme, distance: Distance | AbsoluteSize) => AbsoluteSize;
export declare const getFontSize: (theme: EasyFlexTheme, fontSize: FontSize | Size) => Size;
export declare const getFontWeight: (theme: EasyFlexTheme, fontWeight: FontWeight | number) => CssFontWeight | number;
export declare const getHeight: (theme: EasyFlexTheme, height: Height | ElementSize) => ElementSize;
export declare const getLineHeight: (theme: EasyFlexTheme, lineHeight: CssLineHeight | LineHeight) => CssLineHeight;
export declare const getViewportThreshold: (theme: EasyFlexTheme, viewportThreshold: ViewportThreshold | number) => number;
export declare const getWidth: (theme: EasyFlexTheme, width: Width | ElementSize) => ElementSize;
export declare const useEasyFlexTheme: () => EasyFlexTheme;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useViewport: () => Record<'default' | ThemeSize, boolean>;
