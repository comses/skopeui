import { App } from "@/store/modules/app";
import { Datasets } from "@/store/modules/datasets";
import { Messages } from "@/store/modules/messages";
import { getModule } from "vuex-module-decorators";
import { Dataset } from "@/store/modules/dataset";
import { Analysis } from "@/store/modules/analysis";

export class API {
  constructor(store) {
    this.store = store;
  }

  get analysis() {
    return getModule(Analysis, this.store);
  }

  get app() {
    return getModule(App, this.store);
  }

  get datasets() {
    return getModule(Datasets, this.store);
  }

  get messages() {
    return getModule(Messages, this.store);
  }

  get dataset() {
    return getModule(Dataset, this.store);
  }
}

export default ({ store }, inject) => {
  const api = new API(store);
  inject("api", function () {
    return api;
  });
};
