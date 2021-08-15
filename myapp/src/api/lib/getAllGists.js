import { API_ENDPOINT, API_URL_PUBLIC,endpoints} from "../endpoints";
import { getGistsRequest, getGistsSuccess,getGistsFailure } from "../../components/store/actions/requestPosts";

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());
    try {
        const res = await fetch(`${API_URL_PUBLIC}${endpoints.test}`);
        if(!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);

        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};