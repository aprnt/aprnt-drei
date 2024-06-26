import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { TransformControls as TransformControlsImpl } from 'three-stdlib';
import { ForwardRefComponent } from '../helpers/ts-utils';
export type TransformControlsProps = ReactThreeFiber.Object3DNode<TransformControlsImpl, typeof TransformControlsImpl> & JSX.IntrinsicElements['group'] & {
    object?: THREE.Object3D | React.MutableRefObject<THREE.Object3D>;
    enabled?: boolean;
    axis?: string | null;
    domElement?: HTMLElement;
    mode?: 'translate' | 'rotate' | 'scale';
    translationSnap?: number | null;
    rotationSnap?: number | null;
    scaleSnap?: number | null;
    space?: 'world' | 'local';
    size?: number;
    showX?: boolean;
    showY?: boolean;
    showZ?: boolean;
    children?: React.ReactElement<THREE.Object3D>;
    camera?: THREE.Camera;
    onChange?: (e?: THREE.Event) => void;
    onMouseDown?: (e?: THREE.Event) => void;
    onMouseUp?: (e?: THREE.Event) => void;
    onObjectChange?: (e?: THREE.Event) => void;
    makeDefault?: boolean;
};
export declare const TransformControls: ForwardRefComponent<TransformControlsProps, TransformControlsImpl>;
