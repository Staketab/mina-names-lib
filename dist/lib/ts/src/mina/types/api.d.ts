export type networks = "devnet";
export interface ApiResponse<T> {
    data: T | undefined;
    error: string | undefined;
}
export type PaginationParams = {
    page: number;
    limit: number;
};
export type GetDomainsParams = {
    address: string;
    options: PaginationParams;
};
export type DomainsResponse = any;
export type GetNameParams = {
    address: string;
};
export type NameResponse = {
    name: string;
    pk: string;
    img: string | null;
};
