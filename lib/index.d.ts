/// <reference types="react" />
export * from './baseButton/BaseButton';
export * from './baseFlex/BaseFlex';
export * from './baseGrid/BaseGrid';
export * from './baseInput/BaseInput';
export * from './baseTextArea/BaseTextArea';
export * from './col/Col';
export * from './constants';
export * from './easyFlexProvider/EasyFlexProvider';
export * from './img/Img';
export * from './link/Link';
export * from './modal/Modal';
export * from './row/Row';
export * from './spacing/Spacing';
export * from './style/Style';
export * from './text/Text';
export * from './types';
export * from './utils/base';
export * from './utils/border';
export * from './utils/distance';
export * from './utils/font';
export * from './utils/margin';
export * from './utils/padding';
export * from './utils/size';
export declare const createComponents: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>() => {
    BaseButton: import("react").ForwardRefExoticComponent<Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "color"> & import("./utils/border").BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor> & import("./utils/color").ColorProps<CustomColor> & import("./utils/margin").MarginProps<CustomDistance> & import("./utils/padding").PaddingProps<CustomDistance> & import("./utils/flexContainer").FlexContainerProps<CustomDistance> & import("./utils/flexItem").FlexItemProps & import("./utils/font").FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> & import("./utils/overflow").OverflowProps & import("./utils/size").SizeProps<CustomHeight, CustomWidth> & import("react").RefAttributes<HTMLButtonElement>>;
    BaseFlex: import("react").ForwardRefExoticComponent<import("./baseFlex/BaseFlex").BaseFlexProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>;
    BaseGrid: import("react").ForwardRefExoticComponent<import("./baseGrid/BaseGrid").BaseGridProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>;
    BaseInput: import("react").ForwardRefExoticComponent<import("./baseInput/BaseInput").BaseInputProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLInputElement>>;
    BaseTextArea: import("react").ForwardRefExoticComponent<import("./baseTextArea/BaseTextArea").BaseTextAreaProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLTextAreaElement>>;
    Col: import("react").ForwardRefExoticComponent<import("./col/Col").ColProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>;
    EasyFlexProvider: import("react").FC<import("./easyFlexProvider/EasyFlexProvider").EasyFlexProviderProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>>;
    Img: import("react").ForwardRefExoticComponent<import("./img/Img").ImgProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomHeight, CustomWidth> & import("react").RefAttributes<HTMLImageElement>>;
    Link: import("react").ForwardRefExoticComponent<import("./link/Link").LinkProps<CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLAnchorElement>>;
    Modal: import("react").FC<import("./modal/Modal").ModalProps<CustomColor>>;
    Row: import("react").ForwardRefExoticComponent<import("./row/Row").RowProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>;
    Spacing: import("react").ForwardRefExoticComponent<import("./spacing/Spacing").SpacingProps<CustomDistance, CustomViewportThreshold> & import("react").RefAttributes<HTMLDivElement>>;
    Style: import("react").ForwardRefExoticComponent<import("./style/Style").StyleProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> & import("react").RefAttributes<HTMLParagraphElement>>;
    Text: import("react").ForwardRefExoticComponent<import("./text/Text").TextProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLParagraphElement>>;
};
