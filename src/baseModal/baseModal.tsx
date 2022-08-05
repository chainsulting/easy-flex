import React, { FC, HTMLAttributes, MouseEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { IAbsoluteSize, ICssColor } from '../types';
import { isIAbsoluteSize, useEasyFlexTheme } from '../utils';

const Background = styled.div<{
	'data-background-color': ICssColor;
}>`
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

export interface IBaseModalProps extends HTMLAttributes<HTMLDivElement> {
	/** Sets blur for the content covered by the modal background. */
	blur?: boolean | IAbsoluteSize;
	/** Called if the modal background is clicked. */
	onClose: () => void;
}

export const BaseModal: FC<IBaseModalProps> = ({ children, blur, onClose, ...props }) => {
	const theme = useEasyFlexTheme();

	const backgroundElement = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target === backgroundElement.current) {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (isIAbsoluteSize(blur) || (blur !== false && theme.modal.blur)) {
			const styleElement = document.createElement('style');
			styleElement.textContent = `
				#${theme.modal.blurElementId} {
					filter: blur(${isIAbsoluteSize(blur) ? blur : theme.modal.blur});
				}
			`;
			document.head.append(styleElement);

			return () => {
				document.head.removeChild(styleElement);
			};
		}
	}, [blur, theme]);

	const container = useMemo<HTMLElement>(
		() => document.getElementById(theme.modal.containerElementId) ?? document.body,
		[theme]
	);

	return createPortal(
		<Background
			ref={backgroundElement}
			data-background-color={theme.modal.backgroundColor}
			onClick={handleClick}
			{...props}
		>
			{children}
		</Background>,
		container
	);
};
