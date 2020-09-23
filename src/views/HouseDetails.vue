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
        <md-button @click="showModal = true">Delete</md-button>
      </md-card-actions>
    </md-card>
    <div v-else>No data</div>
    <div class="error" v-if="showError">
      Opps. something wrong during delete house
    </div>
    <DeleteHouseModal
      v-if="showModal"
      :address="details.address"
      @delete-house="deleteThisHouse"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeleteHouseModal from "./../components/DeleteHouseModal.vue";

export default {
  name: "HouseDetails",
  components: { DeleteHouseModal },
  computed: {
    ...mapGetters("house", ["houseDetail"]),
  },
  data: () => ({ details: null, showModal: false, showError: false }),
  methods: {
    ...mapActions("house", ["getHouseDetail", "deleteHouse"]),
    deleteThisHouse() {
      this.deleteHouse(this.details._id)
        .then(() => {
          this.$router.push({name:"houses"});
        })
        .catch(() => (this.showError = true));
    },
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
.error {
  color: red;
}
</style>
