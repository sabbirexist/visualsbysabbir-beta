export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "intro", title: "Intro Text", type: "text" },

    { name: "aboutText1", title: "About Text 1", type: "text" },
    { name: "aboutText2", title: "About Text 2", type: "text" },

    { name: "avatar", title: "Avatar", type: "image" },

    { name: "email", title: "Email", type: "string" },
    { name: "location", title: "Location", type: "string" },

    {
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "x", title: "X", type: "url" },
      ],
    },
  ],
};
