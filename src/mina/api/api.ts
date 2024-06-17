import axios, { AxiosInstance } from "axios";
import {
    ApiResponse,
    DomainsResponse,
    GetDomainsParams,
    GetNameParams,
    NameResponse,
    networks,
} from "../types";

type MinansClientParams = { network: networks; xApiKey?: string };

/**
 * API class for interacting with the Mina NS
 * @property xApiKey The api key for authentication
 * @property network The blockchain network to use
 */

export class MinansClient {
    readonly _instance: AxiosInstance;

    constructor({ network, xApiKey }: MinansClientParams) {
        this._instance = axios.create({
            baseURL: `https://minascan.io/${network}/api/`,
            headers: {
                "X-API-KEY": xApiKey,
            },
        });
    }

    /**
     * Gets address domains
     */
    public async getDomains(params: GetDomainsParams): Promise<ApiResponse<DomainsResponse>> {
        try {
            const response = await this._instance.get(`api/domains/${params.address}`, {
                params: {
                    ...params.options,
                },
            });
            const data = response.data.content;
            return {
                data: data,
                error: undefined,
            };
        } catch (error) {
            return {
                data: undefined,
                error: (error as Error).message,
            };
        }
    }

    /**
     * Gets address name
     */
    public async getName(params: GetNameParams): Promise<ApiResponse<NameResponse>> {
        try {
            const response = await this._instance.get(`api/core/accounts/${params.address}/info`);
            const data = response.data;
            const result: NameResponse = {
                name: data.name,
                pk: data.pk,
                img: data.img ?? null,
            };
            return {
                data: result,
                error: undefined,
            };
        } catch (error) {
            return {
                data: undefined,
                error: (error as Error).message,
            };
        }
    }
}
