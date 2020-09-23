<template>
  <div class="house">
    <h1>House details</h1>
    <md-card v-if="details">
      <md-card-header>
        <div class="md-title">Address: {{ details.address }}</div>
      </md-card-header>
      <md-content
        >Address: {{ details.address }},<br />
        owner: {{ details.owner }},<br />
        price: {{ details.owner }}</md-content
      >
      <md-card-actions>
        <md-button>Delete</md-button>
      </md-card-actions>
    </md-card>
    <div v-else>No data</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HouseDetails",
  computed: {
    ...mapGetters("house", ["houseDetail"]),
  },
  data: () => ({ details: null }),
  methods: {
    ...mapActions("house", ["getHouseDetail"]),
  },
  created() {
    if (this.$route.params.id)
      this.getHouseDetail(this.$route.params.id).then((r) => {
        this.details = r;
      });
  },
};
</script>

<style scoped>
.house {
  padding: 50px;
}
</style>
