import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { IAbsoluteSize, IDistance, IViewportThreshold } from '../types';
import { getDistance, getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils';

const StyledSpacing = styled.div<{ 'data-height': IAbsoluteSize; 'data-width': IAbsoluteSize }>`
	display: flex;
	box-sizing: border-box;
	background-color: transparent;
	margin: 0;
	padding: 0;
	min-height: ${({ 'data-height': height }) => height};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height': height }) => height};
	min-width: ${({ 'data-width': width }) => width};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width': width }) => width};
`;

export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
	/** If true, height and width are flipped if flipping has been enabled. */
	flip?: boolean;
	/** Enables flipping. */
	flipEnabled?: boolean;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
	viewportThreshold?: IViewportThreshold | number;
	/** Component's height. */
	height?: IDistance | IAbsoluteSize;
	/** Component's width. */
	width?: IDistance | IAbsoluteSize;
}

export const Spacing: FC<ISpacingProps> = ({
	flip,
	flipEnabled = false,
	viewportThreshold,
	height = '0px',
	width = '0px',
	...props
}) => {
	const theme = useEasyFlexTheme();
	const { width: displayWidth } = useDimension();

	const processedHeight = useMemo<IAbsoluteSize>(
		() =>
			flipEnabled &&
			(flip ||
				(flip === undefined &&
					(viewportThreshold !== undefined
						? displayWidth < getViewportThreshold(theme, viewportThreshold)
						: displayWidth < theme.viewport.fallbackThreshold)))
				? getDistance(theme, width)
				: getDistance(theme, height),
		[displayWidth, flip, flipEnabled, height, theme, viewportThreshold, width]
	);

	const processedWidth = useMemo<IAbsoluteSize>(
		() =>
			flipEnabled &&
			(flip ||
				(flip === undefined &&
					(viewportThreshold !== undefined
						? displayWidth < getViewportThreshold(theme, viewportThreshold)
						: displayWidth < theme.viewport.fallbackThreshold)))
				? getDistance(theme, height)
				: getDistance(theme, width),
		[displayWidth, flip, flipEnabled, height, theme, viewportThreshold, width]
	);

	return <StyledSpacing data-height={processedHeight} data-width={processedWidth} {...props} />;
};
