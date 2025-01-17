import { ConfigProp } from "types";
import { getIsMobile } from "util/hooks/use-is-mobile";

const isMobile = getIsMobile();

export const CONFIG: Record<string, ConfigProp> = {
  n_boids: {
    label: "# boids",
    initial: isMobile ? 100 : 2500,
    min: 1,
    max: isMobile ? 10000 : 50000,
  },
  fpv_camera: {
    label: "fpv camera",
    initial: false,
  },
  sweep: {
    label: "sweep parameters",
    initial: false,
  },
  max_velocity: {
    label: "max velocity",
    initial: 9.0,
    min: 1,
    max: 20,
    step: 0.5,
  },
  alignment_radius: {
    label: "alignment radius",
    initial: 20,
    min: 0.0,
    max: 50,
    step: 0.001,
  },
  cohesion_radius: {
    label: "cohesion radius",
    initial: 20,
    min: 0,
    max: 50,
    step: 0.5,
  },
  separation_radius: {
    label: "separation radius",
    initial: 20,
    min: 0,
    max: 50,
    step: 0.5,
  },
  gravity_position: {
    label: "gravity well position",
    initial: [0, 0, 0],
    max: [250, 250, 250],
    min: [-250, -250, -250],
    step: [5, 5, 5],
    legend: ["x", "y", "z"],
  },
  gravity_magnitude: {
    label: "gravity magnitude",
    initial: 6.0,
    min: 0.0,
    max: 10,
    step: 0.5,
  },
  gravity_radius: {
    label: "gravity radius",
    initial: 250,
    min: 0,
    max: 1000,
    step: 5,
  },

  dispersion_enabled: {
    label: "dispersion",
    initial: false,
  },
  dispersion_radius: {
    label: "dispersion radius",
    initial: 50,
    min: 0,
    max: 50,
    step: 5,
  },
};
