import { CubeTexture } from 'three';
type Options = {
    path: string;
};
export declare function useCubeTexture(files: string[], { path }: Options): CubeTexture;
export declare namespace useCubeTexture {
    var preload: (files: string[], { path }: Options) => undefined;
}
export {};
