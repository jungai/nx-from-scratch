import express from 'express';
import type { Express } from 'express';
import cors from 'cors';

function addCors(e: Express): Express {
  return e.use(cors());
}

function addBodyParser(e: Express): Express {
  return e.use(express.json()).use(express.urlencoded({ extended: true }));
}

function addRoutes(e: Express): Express {
  return e.get('/', (_req, req) => {
    req.send(`custom express app`);
  });
}

export const app: Express = [addCors, addBodyParser, addRoutes].reduce(
  (ex, middleware) => middleware(ex),
  express()
);
