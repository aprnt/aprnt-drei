import { Texture } from 'three';
export declare function useMatcapTexture(id?: number | string, format?: number, onLoad?: (texture: Texture | Texture[]) => void): [Texture, string, number];
