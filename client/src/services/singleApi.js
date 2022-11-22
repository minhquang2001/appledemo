import httpRequest from "~/utils/httpResquest";

export const singleApi = async (id) => {
    try {
        const res = await httpRequest.get(`groupproduct/${id}`);
        return res.data;
    } catch (error) {
        return error
    }
};
