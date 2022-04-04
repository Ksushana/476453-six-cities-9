import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import { requireAuthorization, setOffers, setError, setRoomComments, setRoomOffers, fetchOfferById, redirectToRoute, setFavorites, setUser, clearOffer } from './action';
import {errorHandle} from '../services/error-handle';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import { AddComment, Comments, Offer, Offers, ToggleFavoriteStatus } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const clearOfferAction = createAsyncThunk(
  'offer/clearOffer',
  () => {
    setTimeout(
      () => store.dispatch(clearOffer(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
      store.dispatch(setUser(email));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(setFavorites([]));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(setOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferByIdAction = createAsyncThunk(
  'offer/fetchOfferById',
  async (hotelId: string) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offer}/${hotelId}`);
      store.dispatch(fetchOfferById(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'offer/setRoomComments',
  async (hotelID: string) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${hotelID}`);
      store.dispatch(setRoomComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'offer/setRoomOffers',
  async (hotelID: string) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${hotelID}/nearby`);
      store.dispatch(setRoomOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addCommentAction = createAsyncThunk(
  'offer/addComment',
  async ({hotelID, commentData}: AddComment) => {
    try {
      const {comment, rating} = commentData;
      const {data} = await api.post<Comments>(`${APIRoute.Comments}/${hotelID}`, {comment, rating});
      store.dispatch(setRoomComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk(
  'favorites/setFavorites',
  async () => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Favorites}`);
      store.dispatch(setFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const toggleFavoriteAction = createAsyncThunk(
  'data/toggleFavorite',
  async ({ id, status }: ToggleFavoriteStatus) => {
    try {
      await api.post<Offers>(`${APIRoute.Favorites}/${id}/${status}`);
      store.dispatch(fetchFavoritesAction());
    } catch (error) {
      errorHandle(error);
    }
  },
);

