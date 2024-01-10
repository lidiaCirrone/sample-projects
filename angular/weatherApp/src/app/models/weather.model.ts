export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: WeatherDataCurrentUnits;
  current: WeatherDataCurrent;
  daily_units: WeatherDataDailyUnits;
  daily: WeatherDataDaily;
}

export interface WeatherDataCurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
}

export interface WeatherDataCurrent {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
}

export interface WeatherDataDailyUnits {
  time: string
  temperature_2m_max: string
  temperature_2m_min: string
}

export interface WeatherDataDaily {
  time: string[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
}
