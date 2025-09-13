import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Router, NavigationEnd } from '@angular/router';
import { inject } from '@angular/core';




bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

