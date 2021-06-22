  <ion-split-pane content-id="menu-content" when="lg">
    <ion-menu content-id="menu-content" side="start" type="overlay" style="--side-width:170px">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>Awesome avocado menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content> Awesome avocado content </ion-content>
    </ion-menu>
    <ion-content id="menu-content">
      <ion-header>
        <ion-toolbar>
          <nav class="bg-indigo-200 py-auto p-4">
            <a href="/">Home</a>
            <a href="/blogs">Blogs</a>
          </nav>
        </ion-toolbar>
      </ion-header>
      <slot><!-- optional fallback --></slot>
    </ion-content>
  </ion-split-pane>
