#!/bin/sh
cd frontend && rm -rf dist/ && rm -rf node_modules && npm install && npm run build