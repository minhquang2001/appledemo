import httpRequest from "~/utils/httpRequest";

export const singleApi = async (id) => {
    try {
        const res = await httpRequest.get(`groupproduct/${id}`);
        return res.data;
    } catch (error) {
        return error
    }
};
