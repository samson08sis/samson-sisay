import { Availability, AvailabilityConfig } from "@/types";

export const availability = {
  AVAILABLE: { label: "Available for work", color: "emerald" },
  LIMITED: { label: "Limited", color: "orange" },
  UNAVAILABLE: { label: "Unavailable for the moment", color: "rose" },
};

export const AVAILABILITY_CONFIG: Record<Availability, AvailabilityConfig> = {
  AVAILABLE: {
    label: "Available to work",
    t_label: "available",
    styles: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/10",
      text: "text-emerald-600 dark:text-emerald-400",
      dot: "bg-emerald-500 dark:bg-emerald-400",
    },
  },
  LIMITED: {
    label: "Limited availability",
    t_label: "limited",
    styles: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/10",
      text: "text-amber-600 dark:text-amber-400",
      dot: "bg-amber-500 dark:bg-amber-400",
    },
  },
  UNAVAILABLE: {
    label: "Unavailable for the moment",
    t_label: "currently busy",
    styles: {
      border: "border-rose-500/20",
      bg: "bg-rose-500/10",
      text: "text-rose-600 dark:text-rose-400",
      dot: "bg-rose-500/10 dark:bg-rose-500/40",
    },
  },
};
