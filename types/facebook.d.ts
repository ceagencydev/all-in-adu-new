declare global {
  interface Window {
    fbq: (
      command: "init" | "track" | "trackCustom",
      eventName: string,
      params?: {
        [key: string]: any
      },
    ) => void
  }
}

export {}
