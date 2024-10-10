interface EventMetadata {
  userAgent?: string;
}

export class Telemetry {
  init() {
    console.log('Telemetry initialized');
  }

  trackEvent(event: 'open_variable_window', metadata?: EventMetadata) {
    console.log('Telemetry event tracked', event, metadata);
  }
}
