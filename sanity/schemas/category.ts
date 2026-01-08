{
  name: "format",
  title: "Format",
  type: "string",
  initialValue: "short",
  options: {
    list: [
      { title: "Long Form (16:9)", value: "long" },
      { title: "Short Form (9:16)", value: "short" }
    ],
    layout: "radio" // looks nice on mobile too
  },
  validation: (Rule: any) => Rule.required()
}
