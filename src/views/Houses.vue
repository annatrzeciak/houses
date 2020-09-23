<template>
  <div class="houses">
    <h1>Houses</h1>
    <md-card v-for="house in houses" :key="house._id">
      <md-card-header>
        <div class="md-title">Address: {{ house.address }}</div>
      </md-card-header>

      <md-card-actions>
        <router-link :to="'/house-details/' + house._id" tag="md-button"
          >More</router-link
        >
        <md-button>Delete</md-button>
      </md-card-actions>
    </md-card>
    <div v-if="!houses.length">No data</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Houses",
  components: {},
  computed: {
    ...mapGetters("house", ["houses"]),
  },
  methods: {
    ...mapActions("house", ["getAllHouses"]),
  },
  created() {
    this.getAllHouses();
  },
};
</script>

<style scoped>
.houses {
  padding: 50px;
}
.md-card {
  margin-bottom: 5px;
}
</style>
