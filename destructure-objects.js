const launch = {
  flight_number: 109,
  mission_name: "Starlink-15 (v1.0)",
  mission_id: [],
  launch_year: "2020",
  launch_date_unix: 1603553460,
  launch_date_utc: "2020-10-24T15:31:00.000Z",
  launch_date_local: "2020-10-24T11:31:00-04:00",
  is_tentative: false,
  tentative_max_precision: "hour",
  tbd: false,
  launch_window: null,
  rocket: {
    rocket_id: "falcon9",
    rocket_name: "Falcon 9",
    rocket_type: "FT",
    first_stage: {
      cores: [
        {
          core_serial: "B1049",
          flight: 7,
          block: 5,
          gridfins: true,
          legs: true,
          reused: true,
          land_success: true,
          landing_intent: true,
          landing_type: "ASDS",
          landing_vehicle: "OCISLY",
        },
      ],
    },
    second_stage: {
      block: 5,
      payloads: [
        {
          payload_id: "Starlink-15",
          norad_id: [],
          reused: false,
          customers: ["SpaceX"],
          nationality: "United States",
          manufacturer: "SpaceX",
          payload_type: "Satellite",
          payload_mass_kg: 15400,
          payload_mass_lbs: 33951.2,
          orbit: "VLEO",
          orbit_params: {
            reference_system: "geocentric",
            regime: "very-low-earth",
            longitude: null,
            semi_major_axis_km: null,
            eccentricity: null,
            periapsis_km: null,
            apoapsis_km: null,
            inclination_deg: null,
            period_min: null,
            lifespan_years: null,
            epoch: null,
            mean_motion: null,
            raan: null,
            arg_of_pericenter: null,
            mean_anomaly: null,
          },
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: true,
      recovered: null,
      ship: "GOMSCHIEF",
    },
  },
  ships: ["GOMSTREE", "GOMSCHIEF", "JRTI-2", "GOQUEST"],
  telemetry: {
    flight_club: null,
  },
  launch_site: {
    site_id: "ccafs_slc_40",
    site_name: "CCAFS SLC 40",
    site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40",
  },
  launch_success: true,
  links: {
    mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
    mission_patch_small: "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
    reddit_campaign:
      "https://www.reddit.com/r/spacex/comments/i63bst/starlink_general_discussion_and_deployment_thread/",
    reddit_launch:
      "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link: null,
    wikipedia: "https://en.wikipedia.org/wiki/Starlink",
    video_link: "https://youtu.be/J442-ti-Dhg",
    youtube_id: "J442-ti-Dhg",
    flickr_images: [],
  },
  details: null,
  upcoming: false,
  static_fire_date_utc: "2020-11-21T16:31:00.000Z",
  static_fire_date_unix: 1605976260,
  timeline: null,
  crew: null,
};

console.log(`
LATEST SPACEX LAUNCH: 

Mission: ${launch.mission_name}
Flight number: ${launch.flight_number}
Rocket: ${launch.rocket.rocket_name}
Was this a reused rocket? ${launch.rocket.fairings.reused}
Launch site: ${launch.launch_site.site_name_long}
${launch.launch_success ? "Elon had a good day" : "Elon was sad"}
`);
