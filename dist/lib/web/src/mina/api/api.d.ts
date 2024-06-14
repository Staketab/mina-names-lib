import { AxiosInstance } from "axios";
import { ApiResponse, DomainsResponse, GetDomainsParams, GetNameParams, NameResponse, networks } from "../types";
type MinansClientParams = {
    network: networks;
    xApiKey?: string;
};
/**
 * API class for interacting with the Mina NS
 * @property xApiKey The api key for authentication
 * @property network The blockchain network to use
 */
export declare class MinansClient {
    readonly _instance: AxiosInstance;
    constructor({ network, xApiKey }: MinansClientParams);
    /**
     * Gets address domains
     */
    getDomains(params: GetDomainsParams): Promise<ApiResponse<DomainsResponse>>;
    /**
     * Gets address details
     */
    getName(params: GetNameParams): Promise<ApiResponse<NameResponse>>;
}
export {};
