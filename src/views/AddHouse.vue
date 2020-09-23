<template>
  <div>
    <h1>Add house</h1>

    <form novalidate class="md-layout" @submit.prevent="saveHouse">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">House</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="address">Address</label>
                <md-input name="address" id="address" v-model="form.address" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="owner">Owner</label>
                <md-input name="owner" id="owner" v-model="form.owner" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="area">Area</label>
                <md-input type="number" name="area" id="area" v-model="form.area" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="price">Price</label>
                <md-input name="price" id="price" v-model="form.price" />
              </md-field>
            </div></div
        ></md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary">Save</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <div class="error" v-if="showError">
      Opps. something wrong during delete house
    </div>
    <div class="success" v-if="showSuccess">Saved</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddHouse",
  data: () => ({
    form: { address: "", owner: "", price: "" },
    showError: false,
    showSuccess: false,
  }),
  methods: {
    ...mapActions("house", ["addHouse"]),
    resetForm() {
      this.form = { address: "", owner: "", price: "", area:0 };
    },
    saveHouse() {
      // todo: validation
      this.addHouse(this.form)
        .then(() => {
          this.showSuccess = true;
          this.resetForm();
        })
        .catch(() => {
          this.showError = true;
        });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
