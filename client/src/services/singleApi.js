import httpRequest from "~/utils/httpResquest";

export const singleApi = async (id) => {
    try {
        const res = await httpRequest.get(`/${id}`);
        return res;
    } catch (error) {
        return error
    }
};
