import * as THREE from 'three';
import * as React from 'react';
import { RefObject } from 'react';
import { useVideoTexture } from '../core/useVideoTexture';
import { FacemeshApi, FacemeshProps } from './Facemesh';
type VideoTextureSrc = Parameters<typeof useVideoTexture>[0];
export type FaceControlsProps = {
    camera?: THREE.Camera;
    autostart?: boolean;
    webcam?: boolean;
    webcamVideoTextureSrc?: VideoTextureSrc;
    manualUpdate?: boolean;
    manualDetect?: boolean;
    onVideoFrame?: (e: THREE.Event) => void;
    makeDefault?: boolean;
    smoothTime?: number;
    offset?: boolean;
    offsetScalar?: number;
    eyes?: boolean;
    eyesAsOrigin?: boolean;
    depth?: number;
    debug?: boolean;
    facemesh?: FacemeshProps;
};
export type FaceControlsApi = THREE.EventDispatcher & {
    detect: (video: HTMLVideoElement, time: number) => void;
    computeTarget: () => THREE.Object3D;
    update: (delta: number, target?: THREE.Object3D) => void;
    facemeshApiRef: RefObject<FacemeshApi>;
    webcamApiRef: RefObject<WebcamApi>;
    play: () => void;
    pause: () => void;
};
export declare const FaceControls: React.ForwardRefExoticComponent<FaceControlsProps & React.RefAttributes<FaceControlsApi>>;
export declare const useFaceControls: () => FaceControlsApi;
type WebcamApi = {
    videoTextureApiRef: RefObject<VideoTextureApi>;
};
type VideoTextureApi = {
    texture: THREE.VideoTexture;
};
export {};
