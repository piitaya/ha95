"""Switch platform for Retro Experience."""

from __future__ import annotations

from homeassistant.components.switch import SwitchEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.restore_state import RestoreEntity

from .const import DOMAIN


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Retro Experience switches."""
    async_add_entities(
        [
            RetroExperienceThemeSwitch(entry),
            RetroExperienceAssistantSwitch(entry),
        ]
    )


class RetroExperienceBaseSwitch(SwitchEntity, RestoreEntity):
    """Base switch for Retro Experience."""

    _attr_has_entity_name = True
    _attr_should_poll = False

    def __init__(self, entry: ConfigEntry) -> None:
        """Initialize the switch."""
        self._attr_device_info = {
            "identifiers": {(DOMAIN, entry.entry_id)},
            "name": "Retro Experience",
            "manufacturer": "piitaya",
        }
        self._attr_is_on = False

    async def async_added_to_hass(self) -> None:
        """Restore last known state on startup."""
        await super().async_added_to_hass()
        last_state = await self.async_get_last_state()
        if last_state is not None:
            self._attr_is_on = last_state.state == "on"

    async def async_turn_on(self, **kwargs) -> None:
        """Turn on."""
        self._attr_is_on = True
        self.async_write_ha_state()

    async def async_turn_off(self, **kwargs) -> None:
        """Turn off."""
        self._attr_is_on = False
        self.async_write_ha_state()


class RetroExperienceThemeSwitch(RetroExperienceBaseSwitch):
    """Switch to enable/disable the retro theme."""

    _attr_translation_key = "theme"

    def __init__(self, entry: ConfigEntry) -> None:
        """Initialize the switch."""
        super().__init__(entry)
        self._attr_unique_id = f"{entry.entry_id}_theme"


class RetroExperienceAssistantSwitch(RetroExperienceBaseSwitch):
    """Switch to enable/disable the assistant."""

    _attr_translation_key = "assistant"

    def __init__(self, entry: ConfigEntry) -> None:
        """Initialize the switch."""
        super().__init__(entry)
        self._attr_unique_id = f"{entry.entry_id}_assistant"
