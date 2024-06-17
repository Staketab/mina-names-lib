import axios from "axios";
/**
 * API class for interacting with the Mina NS
 * @property xApiKey The api key for authentication
 * @property network The blockchain network to use
 */
export class MinansClient {
    constructor({ network, xApiKey }) {
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
    async getDomains(params) {
        try {
            const response = await this._instance.get("api/domains/" + params.address, {
                params: {
                    ...params.options,
                },
            });
            const data = response.data.content;
            return {
                data: data,
                error: undefined,
            };
        }
        catch (error) {
            return {
                data: undefined,
                error: error.message,
            };
        }
    }
    /**
     * Gets address name
     */
    async getName(params) {
        try {
            const response = await this._instance.get("api/core/accounts/" + params.address);
            const data = response.data.content;
            const result = {
                name: data.name,
                pk: data.pk,
                img: data.img ?? null,
            };
            return {
                data: result,
                error: undefined,
            };
        }
        catch (error) {
            return {
                data: undefined,
                error: error.message,
            };
        }
    }
}
//# sourceMappingURL=api.js.map