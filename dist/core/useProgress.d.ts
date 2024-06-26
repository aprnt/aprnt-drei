type Data = {
    errors: string[];
    active: boolean;
    progress: number;
    item: string;
    loaded: number;
    total: number;
};
declare const useProgress: import("zustand").UseBoundStore<Data, import("zustand").StoreApi<Data>>;
export { useProgress };
