import { formatDate } from "../utils/date";

export type UserLocation = [string, string, number];

export const location: UserLocation = ["Helsinki", formatDate(), 17];
