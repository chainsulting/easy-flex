import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color, CssColor, CustomName, Falsifiable } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColor, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledInput = styled.input<
	{ 'data-placeholder-color'?: CssColor } & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	border: none;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
	${sizeStyle}

	&::placeholder {
		color: ${({ 'data-placeholder-color': placeholderColor }) => placeholderColor};
	}
`;

export interface BaseInputProps<
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		DistanceProps<CustomDistance>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		SizeProps<CustomHeight, CustomWidth> {
	placeholderColor?: Falsifiable<Color<CustomColor>>;
}

export const createBaseInput = <
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const BaseInput = forwardRef<
		HTMLInputElement,
		BaseInputProps<
			CustomBorderRadius,
			CustomBorderWidth,
			CustomColor,
			CustomDistance,
			CustomFontFamily,
			CustomFontSize,
			CustomFontWeight,
			CustomHeight,
			CustomLineHeight,
			CustomWidth
		>
	>(
		(
			{
				alignSelf,
				backgroundColor,
				basis,
				borderColor,
				borderRadius,
				borderStyle,
				borderWidth,
				color,
				flex,
				fontFamily,
				fontSize,
				fontWeight,
				fullHeight,
				fullWidth,
				grow,
				height,
				italic,
				lineHeight,
				margin,
				marginBottom,
				marginHorizontal,
				marginLeft,
				marginRight,
				marginTop,
				marginVertical,
				maxHeight,
				maxWidth,
				minHeight,
				minWidth,
				padding,
				paddingBottom,
				paddingHorizontal,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingVertical,
				placeholderColor,
				round,
				shrink,
				underline,
				whiteSpace,
				width,
				wordBreak,
				...props
			},
			ref
		) => {
			const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

			const colorStyleProps = useColorStyleProps({ backgroundColor, color });

			const distanceStyleProps = useDistanceStyleProps({
				margin,
				marginBottom,
				marginHorizontal,
				marginLeft,
				marginRight,
				marginTop,
				marginVertical,
				padding,
				paddingBottom,
				paddingHorizontal,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingVertical,
			});

			const fontStyleProps = useFontStyleProps({
				fontFamily,
				fontSize,
				fontWeight,
				italic,
				lineHeight,
				underline,
				whiteSpace,
				wordBreak,
			});

			const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

			const sizeStyleProps = useSizeStyleProps({
				fullHeight,
				fullWidth,
				height,
				maxHeight,
				maxWidth,
				minHeight,
				minWidth,
				width,
			});

			const processedPlaceholderColor = useColor(placeholderColor);

			return (
				<StyledInput
					data-placeholder-color={processedPlaceholderColor}
					{...borderStyleProps}
					{...colorStyleProps}
					{...distanceStyleProps}
					{...flexItemStyleProps}
					{...fontStyleProps}
					{...sizeStyleProps}
					ref={ref}
					{...props}
				/>
			);
		}
	);
	BaseInput.displayName = 'BaseInput';
	return BaseInput;
};
