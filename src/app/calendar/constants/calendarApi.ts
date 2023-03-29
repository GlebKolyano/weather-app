enum CalendarUrls {
  events = 'https://www.googleapis.com/calendar/v3/calendars/primary/events',
}

enum CalendarApiEndpoints {
  events = 'events',
}

const DEFAULT_EVENTS_PARAMS = {
  orderBy: 'startTime',
  singleEvents: true,
  showDeleted: false,
  timeMin: new Date().toISOString(),
  maxResults: 5,
};

export { CalendarUrls, CalendarApiEndpoints, DEFAULT_EVENTS_PARAMS };
