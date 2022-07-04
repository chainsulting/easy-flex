import React, { FC, HTMLAttributes, MouseEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { toPx, useEasyFlexTheme } from '../utils';

const Background = styled.div<{
	'data-background-color': string;
	'data-max-child-height'?: string;
	'data-max-child-width'?: string;
}>`
	display: flex;
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	min-height: 100vh;
	min-width: 100vw;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	align-items: center;
	justify-content: center;

	& :only-child {
		max-height: ${({ 'data-max-child-height': maxChildHeight }) => maxChildHeight};
		max-width: ${({ 'data-max-child-width': maxChildWidth }) => maxChildWidth};
	}
`;

interface IBaseModalProps extends HTMLAttributes<HTMLDivElement> {
	keepChildInside?: boolean;
	blur?: boolean | number;
	onClose: () => void;
}

export const BaseModal: FC<IBaseModalProps> = ({ children, keepChildInside = false, blur, onClose, ...props }) => {
	const theme = useEasyFlexTheme();

	const backgroundElement = useRef(null);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target === backgroundElement.current) {
				onClose();
			}
		},
		[onClose]
	);

	const maxChildHeight = useMemo<string | undefined>(() => (keepChildInside ? '100vh' : undefined), [keepChildInside]);

	const maxChildWidth = useMemo<string | undefined>(() => (keepChildInside ? '100vw' : undefined), [keepChildInside]);

	useEffect(() => {
		if (typeof blur === 'number' || (blur !== false && theme.modal.blur)) {
			const styleElement = document.createElement('style');
			styleElement.textContent = `
				#root {
					filter: blur(${typeof blur === 'number' ? toPx(blur) : toPx(theme.modal.blur)})
				}
			`;
			document.head.append(styleElement);

			return () => {
				document.head.removeChild(styleElement);
			};
		}
	}, [blur, theme]);

	return createPortal(
		<Background
			ref={backgroundElement}
			data-background-color={theme.modal.backgroundColor}
			data-max-child-height={maxChildHeight}
			data-max-child-width={maxChildWidth}
			onClick={handleClick}
			{...props}
		>
			{children}
		</Background>,
		document.body
	);
};
