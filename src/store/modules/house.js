import * as House from "../api/house";
export default {
  namespaced: true,
  state: { houses: [] },
  getters: { houses: (state) => state.houses },
  mutations: {
    SET_HOUSES: (state, payload) => {
      state.houses = payload;
    },
  },

  actions: {
    getAllHouses: async (context) => {
      return House.getHouses()
        .then((success) => {
          context.commit("SET_HOUSES", success.data.houses);

          return Promise.resolve(success.data);
        })
        .catch((err) => Promise.reject(err.response));
    },
    getHouseDetail: async (context, houseId) => {
      return House.getHouse(houseId)
        .then((success) => {
          return Promise.resolve(success.data);
        })
        .catch((err) => Promise.reject(err.response));
    },

    deleteHouse: async (context, houseId) => {
      return House.deleteHouse(houseId)
          .then((success) => {
            return Promise.resolve(success.data);
          })
          .catch((err) => Promise.reject(err.response));
    },

    addHouse: async (context, data) => {
      return House.addHouse(data)
          .then((success) => {
            return Promise.resolve(success.data);
          })
          .catch((err) => Promise.reject(err.response));
    },


  },
};
