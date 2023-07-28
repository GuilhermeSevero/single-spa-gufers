import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@gufers/navbar",
  app: () => System.import<LifeCycles>("@gufers/navbar"),
  activeWhen: () => true
});

registerApplication({
  name: "@gufers/app-home",
  app: () => System.import<LifeCycles>("@gufers/app-home"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@gufers/app1",
  app: () => System.import<LifeCycles>("@gufers/app1"),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@gufers/app2",
  app: () => System.import<LifeCycles>("@gufers/app2"),
  activeWhen: ["/app2"],
});

start({
  urlRerouteOnly: true,
});
