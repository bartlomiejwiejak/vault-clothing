import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)
export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => collections ? collections[collectionUrlParam] : collections
)
export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => {
    return collections ? Object.keys(collections).map(key => collections[key]) : []
  }
)
export const selectIsLoading = createSelector(
  [selectShop],
  shop => shop.isLoading
)
export const selectIsCollectionLoaded = createSelector(
  [selectShopCollections],
  collections => !!collections
)