// ==UserScript==
// @name Discord Experiments
// @namespace luna.ws
// @description Enable Discord Experiments
// @version 0.0.6
// @match *://*.discord.com/*
// @run-at document-start
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  console.log('Discord Experiment 0.0.6');
  window.module = null;

  function disco() {
    try {
      webpackChunkdiscord_app.push([[Math.random()], {}, (e) => { window.module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default; }]);
      const nodes = Object.values(window.module._dispatcher._actionHandlers._dependencyGraph.nodes);
      try { nodes.find(x => x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: { flags: 1 } }); } catch (e) { }
      const original = [window.module.getCurrentUser, window.module.getNonImpersonatedCurrentUser];
      window.module.getCurrentUser = window.module.getNonImpersonatedCurrentUser = () => ({ isStaff: () => true });
      nodes.find(x => x.name === "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
      [window.module.getCurrentUser, window.module.getNonImpersonatedCurrentUser] = original;

      console.log('Discord Experiments has been enabled successfully.');
    } catch (error) {
      console.error('An error occurred while enabling Discord Experiments:', error);
    }
  }

  disco();
});
