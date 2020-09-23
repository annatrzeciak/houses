<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Delete House with address{{ address }}?</md-dialog-title>

      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('close-modal')"
          >Close</md-button
        >
        <md-button class="md-primary" @click="$emit('delete-house')"
          >Yes</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "DeleteHouseModal",
  props: { address: String },

  data: () => ({ showDialog: true }),
};
</script>

<style scoped></style>
