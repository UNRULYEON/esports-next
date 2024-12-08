#!/usr/bin/env bash

# Uninstall pnpm
rm -rf $(pnpm store path)
rm -rf $PNPM_HOME
npm rm -g pnpm

# Install pnpm with corepack
export PNPM_HOME="/pnpm"
export PATH="$PNPM_HOME:$PATH"
corepack enable
corepack up