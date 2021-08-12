import { useEffect,useCallback } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useRequestApi } from '../../hooks/api/useRequestApi';
import { postApi } from '../../api/requests/posts';
import { getAllGists } from '../../api/lib/getAllGists';
import { selectGists,  selectGistsError, selectGistsLoading } from '../store/selectors/postsSelectors';
import { useDispatch,useSelector } from "react-redux";




const PostsPage = () => {
    const dispatch = useDispatch();

    const gists =  useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect (
        ()=>{requestGists()},
        []
    );



    const { isLoading, isError, data, request } = useRequestApi({
        api: postApi.getPosts,
        isAutoRun: false,
      }
    );

    const renderGists = useCallback(
        (gist)=> <li  key={gist.id}>{gist.description}</li>,
        []
    );

    if(loading) {
        return <CircularProgress/>;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }

    

  
    return ( 
        <>
            <div>
                <h3>This is a page for the posts!</h3>
                <button
                onClick={request}>Get posts!
                </button>
                {
                isLoading&&<div>Loading...</div>
                }
                {
                isError&&<div>Error</div>
                }
                {
                Array.isArray(data)&&data.map(({title,id,userId}) => <div key={id}>{userId}{title}</div>)
                }
            </div>
            <div>
                <ul style={{listStyle:'none'}}>{gists.map(renderGists)}</ul>
            </div>
        </>
    )
} 

export default PostsPage