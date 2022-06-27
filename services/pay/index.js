import { apiClient } from "../api";

export const createPayApi = async (data) => {
    return await apiClient.post('/pay/create', data);
}
