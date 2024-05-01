import {
  GET_ARTICLE_FAILURE,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_DETAIL_ARTICLE_FAILURE,
  GET_DETAIL_ARTICLE_REQUEST,
  GET_DETAIL_ARTICLE_SUCCESS,
} from "./action";

const initState = {
  articles: [],
  articlesDetails: [],
  isLoading: false,
  isError: false,
};

export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        articles: action.payload,
      };

    case GET_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_DETAIL_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_DETAIL_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        articlesDetails: action.payload,
      };

    case GET_DETAIL_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};
