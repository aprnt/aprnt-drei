import { Texture } from 'three';
import * as THREE from 'three';
export declare const getFirstItem: (param: any) => any;
export declare const checkIfFrameIsEmpty: (frameData: Uint8ClampedArray) => boolean;
export declare const calculateAspectRatio: (width: number, height: number, factor: number, v: any) => THREE.Vector3;
export declare function useSpriteLoader<Url extends string>(input?: Url | null, json?: string | null, animationNames?: string[] | null, numberOfFrames?: number | null, onLoad?: (texture: Texture, textureData?: any) => void): any;
export declare namespace useSpriteLoader {
    var preload: (url: string) => undefined;
    var clear: (input: string) => void;
}
