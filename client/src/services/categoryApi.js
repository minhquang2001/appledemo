import httpRequest from "~/utils/httpResquest";

export const categoryApi = async (category) => {
    try {
        const res = await httpRequest.get(`category/${category}/groupproducts`);
        return res.data.data;
    } catch (error) {
        return error
    }
};
