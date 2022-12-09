import httpRequest from 'src/utils/httpRequest';


export const search = async (q) => {
    try {
        const res = await httpRequest.get('groupproducts', {
            params: {
                q,
            },
        });
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
