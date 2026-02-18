import express from "express";
import { getWeatherData } from "../controllers/weatherController.js";
import { validateCityName } from "../middleware/validators.js";

// Create router object
const router = express.Router();

/**
 * Forecast route for London
 * This MUST come before "/:city"
 */
router.get("/london/forecast", (_req, res) => {
  res.json({
    dayOne: 14,
    dayTwo: 23,
    dayThree: 17
  });
});

/**
 * Existing city route
 * Example:
 * /api/weather/london
 * /api/weather/paris
 * /api/weather/dublin
 */
router.get("/:city", validateCityName, getWeatherData);

// Export router
export default router;
