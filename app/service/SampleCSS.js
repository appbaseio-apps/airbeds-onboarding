export const SampleCSS = `body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
}
body .row {
  margin-bottom: 0;
}
body .rbc {
  margin-bottom: 12px;
}
body .rbc .rbc-title {
  font-size: 14px;
  line-height: 28px;
  text-transform: uppercase;
}

nav {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  background-color: #FF5A5F;
  position: fixed;
  z-index: 2;
  box-shadow: none;
  border: 0;
  display: flex;
  justify-content: center;
}
nav .brand {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.sensor-wrapper {
  background-color: #fff;
  width: 300px;
  position: fixed;
  top: 50px;
  left: 0;
  height: calc(100% - 50px);
  padding: 15px;
  z-index: 100;
}
.sensor-wrapper .rbc {
  border: 0;
  box-shadow: none;
}

.result-wrapper {
  width: calc(100% - 300px);
  right: 0;
  top: 50px;
  position: absolute;
}

.rbc.rbc-pagination {
  text-align: center;
  border: 0;
  box-shadow: none;
  background-color: transparent;
}

.rbc-red .rbc.rbc-resultstats {
  padding: 0 20px;
  text-align: right;
  background-color: transparent;
  margin-top: 12px;
  margin-bottom: -10px;
}

.rbc.rbc-resultcard .rbc-resultcard-container {
  background-color: #fafafa;
  height: auto;
  max-height: none;
  box-shadow: none;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-scroll-container {
  height: auto !important;
  justify-content: space-between;
  margin-top: 20px;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item {
  width: calc(33.33% - 12px);
  max-width: 340px;
  margin: 0 6px;
  border: 0;
  position: relative;
}
@media all and (max-width: 768px) {
  .rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item {
    width: calc(50% - 12px);
  }
}
@media all and (max-width: 480px) {
  .rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item {
    width: 100%;
    margin: 0 auto;
  }
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .host {
  border: 2px solid #fefefe;
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 50px;
  right: 20px;
  background-color: #fefefe;
  background-size: cover;
  background-position: center center;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .price {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 150px;
  height: 48px;
  color: #fff;
  padding: 11px 20px;
  font-size: 20px;
  background-color: #424242;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__image {
  background-size: cover;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__title {
  padding-left: 0;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__desc {
  padding: 0;
}
.rbc.rbc-resultcard .rbc-resultcard-container .rbc-resultcard-item .rbc-resultcard-item__desc p {
  margin: 2px 0;
}

@media all and (max-width: 768px) {
  .rbc-base {
    overflow: hidden;
  }

  .sensor-wrapper {
    position: static;
    width: 100%;
    margin-top: 50px;
    background-color: #fff;
    padding: 10px 15px;
  }

  .result-wrapper {
    width: 100%;
    position: static;
  }

  .rbc.rbc-numberbox {
    display: none;
  }
}
`;
