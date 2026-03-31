# Retro Experience for Home Assistant

> **Warning**: This integration is experimental and just for fun. It overrides your frontend theme and injects UI elements. Use at your own risk.

Transform your Home Assistant into a nostalgic retro experience!

## Features

- **Retro Theme**: Applies a full retro theme with bevel effects, classic colors, and Tahoma font
- **Assistant**: A draggable assistant that shares home automation tips
- **BSOD Easter Egg**: Click the assistant 5 times quickly for a surprise
- **Light & Dark Mode**: Full support for both light and dark modes with appropriate retro styling

## Installation

### HACS (Recommended)

1. Add this repository as a custom repository in HACS

   [![Add repository to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=ha-retro-experience&category=integration)

2. Install "Retro Experience"
3. Restart Home Assistant
4. Add the integration:

   [![Add integration](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=retro_experience)

### Manual

1. Copy the `custom_components/retro_experience` folder to your `config/custom_components/` directory
2. Restart Home Assistant
3. Add the integration:

   [![Add integration](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=retro_experience)

## Usage

Once installed, the integration creates two switches under the **Retro Experience** device:

- **Theme** — Enables the retro theme override (bevel effects, classic colors, Tahoma font)
- **Assistant** — Shows a draggable assistant with home automation tips

Both switches are off by default. Turn them on to activate.
