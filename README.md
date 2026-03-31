# Home Assistant 95

![Home Assistant 95](image.jpg)

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

   [![Add repository to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=ha95&category=integration)

2. Install "Home Assistant 95"
3. Restart Home Assistant
4. Add the integration:

   [![Add integration](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ha95)

### Manual

1. Copy the `custom_components/ha95` folder to your `config/custom_components/` directory
2. Restart Home Assistant
3. Add the integration:

   [![Add integration](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ha95)

## Usage

Once installed, the integration creates two switches under the **Home Assistant 95** device:

- **Theme** — Enables the retro theme override (bevel effects, classic colors, Tahoma font)
- **Assistant** — Shows a draggable assistant with home automation tips

Both switches are off by default. Turn them on to activate.

**A browser refresh is required after installing the integration for the first time!**

## Contributing

This project is provided as-is for fun. There is no guarantee that issues will be fixed, and no new features are planned.
