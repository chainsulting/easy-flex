import React, { HTMLAttributes } from 'react';
import { BaseGridElement, Distance } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseGridProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps, ColorProps, FlexItemProps, FontProps, DistanceProps, SizeProps {
    columnGap?: Distance;
    /** Component's html tag. */
    element?: BaseGridElement;
    rowGap?: Distance;
}
export declare const BaseGrid: React.ForwardRefExoticComponent<BaseGridProps & React.RefAttributes<HTMLDivElement>>;
