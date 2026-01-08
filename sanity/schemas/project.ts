export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },

    {
      name: "category",
      title: "Category (Tab)",
      type: "reference",
      to: [{ type: "category" }],
    },

    {
      name: "videoType",
      title: "Video Type",
      type: "string",
      options: {
        list: ["youtube", "vimeo", "direct", "iframe", "gdrive"],
      },
    },

    { name: "videoUrl", title: "Video URL", type: "url" },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },

    { name: "order", title: "Order", type: "number" },
  ],
};
