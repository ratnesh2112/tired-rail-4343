import axios from "axios";

export const GET_ARTICLE_REQUEST = "GET_ARTICLE_REQUEST";
export const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_FAILURE = "GET_ARTICLE_FAILURE";



export const getArticleRequest = ()=>{
    return({
         type:GET_ARTICLE_REQUEST
    })
}



export const getArticleSuccess = (data)=>{
    return({
        type:GET_ARTICLE_SUCCESS,
        payload:data
    })
}



export const getArticleFailure = ()=>{
    return({
        type:GET_ARTICLE_FAILURE
    })
}




export const getArticle=()=>(dispatch)=>{
  dispatch(getArticleRequest())
return axios({
    method:"GET",
    url:"http://localhost:3000/articles"
})
.then(res=>{
    dispatch(getArticleSuccess(res.data))
})
.catch(error=>{
    dispatch(getArticleFailure())
})

}

//Engadget


////////////https://newsapi.org/v2/everything?q=apple&from=2022-07-15&to=2022-07-18&sortBy=popularity&apiKey=6f308c574d1943e5b1d289e16696c509

//https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=6f308c574d1943e5b1d289e16696c509