"""Home Assistant 95 integration for Home Assistant."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components.frontend import add_extra_js_url, remove_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

from .const import DOMAIN, URL_BASE

PLATFORMS = [Platform.SWITCH]


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the Home Assistant 95 component."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Home Assistant 95 from a config entry."""
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                url_path=URL_BASE,
                path=str(Path(__file__).parent / "www"),
                cache_headers=False,
            )
        ]
    )

    add_extra_js_url(hass, f"{URL_BASE}/ha95.js")

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    remove_extra_js_url(hass, f"{URL_BASE}/ha95.js")
    return await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
