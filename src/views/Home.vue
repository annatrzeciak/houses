<template>
  <main>
    <div class="row">
      <div class="col">
        <div class="content">
          <h2 class="col-title">Kilka słów o nas</h2>
          <h3 class="col-subtitle">czyli kim jesteśmy i dokąd zmierzamy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos dolores ea eum incidunt ipsum nihil quis tempore. A
            aspernatur consectetur debitis iste iure maxime ratione,
            reprehenderit repudiandae, sed sit temporibus! A aspernatur
            consectetur debitis iste iure maxime ratione, reprehenderit
            repudiandae, sed sit temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aliquid consectetur eaque explicabo fugit iste
            laboriosam, natus nostrum numquam officia officiis omnis optio, quam
            quas quisquam reprehenderit saepe tempora vitae.
          </p>
          <router-link to="/houses" class="show-more" tag="a"
            >Zobacz więcej</router-link
          >
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <img
              class="fill-col"
              src="./../assets/tlo_logo.png"
              alt="Logo Domex"
              title="Logo Domex"
            />
          </div>
          <div class="col">
            <img
              src="./../assets/wood.jpg"
              alt="Image wood"
              title="Imege wood"
              class="fill-col"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img
              src="./../assets/people.jpg"
              alt="Image people"
              title="Image people"
              class="fill-col"
            />
          </div>
          <div class="col boards-background">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                eius eum fugiat iste magnam minima molestiae mollitia, nemo non
                nulla optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col house-background">
        <div class="content">
          <p>BUDOWA DOMÓW Z DREWNA</p>
          <p>ARCHITEKTURA OGRODOWA</p>
          <p>KOMPLEKSOWE WYKOŃCZENIA WNĘTRZ I REMONTY</p>
          <p>OCIEPLENIA EKOLOGICZNE</p>
          <p>INNE</p>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <h2 class="col-title">Nasza oferta</h2>
          <h3 class="col-subtitle">dowiedz się co mozemy Tobie zaoferować</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos dolores ea eum incidunt ipsum nihil quis tempore. A
            aspernatur consectetur debitis iste iure maxime ratione,
            reprehenderit repudiandae, sed sit temporibus! A aspernatur
            consectetur debitis iste iure maxime ratione, reprehenderit
            repudiandae, sed sit temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aliquid consectetur eaque explicabo fugit iste
            laboriosam, natus nostrum numquam officia officiis omnis optio, quam
            quas quisquam reprehenderit saepe tempora vitae.
          </p>
          <router-link to="/houses" class="show-more" tag="a"
            >Zobacz więcej</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.row {
  min-height: 50vh;
  display: flex;
}
.row .col {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.row .col .row {
  min-height: 50%;
}
.row .col .content {
  padding: 50px;
}
.content p {
  color: #8b8b8b;
}
.col-title {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: -18px;
}
.col-subtitle {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: #22a6ff;
  font-size: 16px;
}
a.show-more {
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  margin-top: 40px;
  padding: 8px 30px;
  font-family: "Oswald", sans-serif;
  background: transparent;
  text-transform: uppercase;
  color: #22a6ff;
  border: 1px solid #22a6ff;
  transition: 0.3s ease-in;
}
a.show-more:hover {
  background: #22a6ff;
  color: white;
}
img.fill-col {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.house-background {
  background: linear-gradient(
      rgba(34, 166, 255, 0.8) 100%,
      rgba(34, 166, 255, 0.8) 100%
    ),
    url("./../assets/house.jpg") center;
  background-size: cover;
}
.house-background p {
  font-family: "Oswald", sans-serif;
  color: #252525;
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 500;
}

.boards-background {
  background: url("./../assets/tlo_1.png") center;
  background-size: cover;
}
.boards-background p {
  font-family: "Oswald", sans-serif;
  color: #252525;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
}
.boards-background p:before {
  content: "";
  width: 8px;
  height: 1px;
  background: #252525;
  display: inline-block;
  position: absolute;
  left: calc(50% - 4px);
  top: 0;
}
.boards-background p:after {
  content: "";
  width: 8px;
  height: 1px;
  background: #252525;
  display: inline-block;
  position: absolute;
  left: calc(50% - 4px);
  bottom: 0;
}
</style>
