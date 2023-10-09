import express, { Router } from "express";

abstract class BaseRoute {
  public route: Router;

  constructor() {
    this.route = express.Router();
    this.configRoute();
  }

  abstract configRoute(): void;
}

export default BaseRoute;
