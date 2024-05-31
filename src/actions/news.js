import { getItem, setItem } from "../utils/AsyncStorageUtils"

export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST'
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS'
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE'

export const CLIP_NEWS_ITEM = 'CLIP_NEWS_ITEM'
export const CLIPPED_TAB_FOCUS = 'CLIPPED_TAB_FOCUS'

export const CLIP_ITEM_RESET = 'CLIP_ITEM_RESET'

export const STORAGE_KEY = '@MAIN/NEWS_LIST/FAVORITE'

//상태변경되어야하는 이벤트가 발생하면, 
//변경될 상태에 대한 정보가 담긴 action을 dispatch인자로 전달해서 사용함
// dispatch함수는 action객체를 reducer함수로 전달해준다. 
//reducer함수는 action객체의 값을 확인하고 
//그 값에 따라 전역 상태 저장소 Store의 상태를 변경함.
export const getNewsList = (query)=> (dispatch)=>{ 
    dispatch({type:GET_NEWS_LIST_REQUEST});

    // setTimeout(() => {
    //     dispatch({type:GET_NEWS_LIST_SUCCESS})
    // }, 2000);

    fetch(`https://openapi.naver.com/v1/search/news.json?query=${decodeURIComponent(query)}`,
    {
        headers:{
            'X-Naver-Client-Id':'비밀',
            'X-Naver-Client-Secret':'씁'
        }
    })
    .then((result)=>{
        return result.json();
    })
    .then((result)=>{
        dispatch({type:GET_NEWS_LIST_SUCCESS, result})
    })
    .catch((ex)=>{
        dispatch({type:GET_NEWS_LIST_FAILURE, ex})
    })
}


export const clipNewsItem = (newsItem)=>(dispatch, getState)=>{
    dispatch({
        type:CLIP_NEWS_ITEM,
        newsItem
    })

    const lastFavoriteList = getState().news.favoriteNews;

    console.log(lastFavoriteList);

    setItem(STORAGE_KEY, JSON.stringify(lastFavoriteList));
}

//async를 사용해서 비동기라서 arrays로 걸어둠
// 한번 heart누른거 재로딩했을때도 남아있게 해줌
export const clippedTabFocus = ()=> async (dispatch, getState)=>{
    
    //dispatch보다 무조건 먼저 나와야함. 왜냐면 dispatch보다 늦게 잇으면 초기화된걸로 파악하고 됨.
    const isInitOnce = getState().news.isInitFocusTabOnce;

    dispatch({
        type:CLIPPED_TAB_FOCUS
    })

    if(isInitOnce){
        return;
    }

    const savedItems = JSON.parse(await getItem(STORAGE_KEY));

    dispatch({
        type:CLIP_ITEM_RESET,
        savedItems,
    })
}