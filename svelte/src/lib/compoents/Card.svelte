<script>
  export let blog;
  let { title, content, url, id, _id, likes, comments } = blog;
</script>

<ion-card
  style="display:flex;flex-direction: column;justify-content: space-between;max-height:300px;"
>
  <ion-card-header>
    <ion-card-subtitle>
      <a href={url}>
        {url}
      </a>
    </ion-card-subtitle>
    <ion-card-title>{title}</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    {content}
  </ion-card-content>

  <ion-card-footer>
    <ion-chip color="danger" mode="ios" outline="true">
      <ion-label>{likes || 0}</ion-label>
      <ion-icon name="heart" />
    </ion-chip>
    <ion-chip color="primary" mode="ios" outline="true">
      <ion-label>{comments || 0}</ion-label>
      <ion-icon name="chatbox" />
    </ion-chip>
    <a href="blogs/{_id}">
      <ion-chip color="tertiary" mode="ios" outline="true">
        <ion-label />
        <ion-icon name="cube" />
      </ion-chip>
    </a>
  </ion-card-footer>
</ion-card>
