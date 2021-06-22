<script>
  let isLogin = false;
</script>

<ion-chip color="tertiary" mode="ios" outline="true">
  <ion-icon name={isLogin?'log-out':'log-in'} />
</ion-chip>
<div class={isLogin ? "hidden" : "block"}>
  <form >
    <ion-card>
      <ion-item>
        <ion-label position="floating">Username</ion-label>
        <ion-input type="text" />
      </ion-item>
      <ion-item>
        <ion-label position="floating"
          >Password <ion-text color="danger">*</ion-text></ion-label
        >
        <ion-input required type="password" />
      </ion-item>
      <button class="focus:outline-none">
        <ion-button type="submit" fill="solid" shape="round" color="tertiary">
          Login
        </ion-button>
      </button>
    </ion-card>
  </form>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  .hidden {
    display: none;
  }
  /* your styles go here */
</style>
