import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSettingsV1 = () =>
  useAppSelector((state: RootState) => state.settingsReducer);

export const useSettingsV2 = () =>
  useAppSelector((state: RootState) => state.settingsReducerV2);

export const useBrowseSettings = () =>
  useAppSelector((state: RootState) => state.settingsReducerV2.browse) || {};

export const useAppearanceSettings = () =>
  useAppSelector((state: RootState) => state.settingsReducerV2.appearance);

export const useReaderSettings = () =>
  useAppSelector((state: RootState) => state.settingsReducer.reader);

/** @deprecated */
export const useLibrarySettings = () =>
  useAppSelector((state: RootState) => state.settingsReducerV2.library);

export const useUpdateSettings = () =>
  useAppSelector((state: RootState) => state.settingsReducerV2.updates);

export const useDownloadQueue = () =>
  useAppSelector((state: RootState) => state.downloadsReducer.downloadQueue);

export const useSourcesReducer = () =>
  useAppSelector((state: RootState) => state.sourceReducerV2);
