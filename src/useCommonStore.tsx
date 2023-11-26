import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCommonStore = create(
  persist(
    (set, get) => ({
      common: {},
      addCommon: () => set({ common: { ...get().common } }),
    }),
    {
      name: 'common-data-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)