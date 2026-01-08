export type ProjectType = "long" | "short";
export type VideoType = "youtube" | "vimeo" | "direct" | "iframe" | "gdrive";

export type Project = {
  id: string;
  type: ProjectType;
  title: string;
  subtitle?: string;
  tags?: string[];
  video: {
    videoType: VideoType;
    url: string; // youtube/vimeo link OR direct mp4 OR iframe URL OR gdrive share link
  };
};

export const projects: Project[] = [
  {
    id: "p1",
    type: "long",
    title: "POV: You've learned a new skill.",
    subtitle: "Showcase",
    tags: ["Graphical Storytelling", "Cinematic"],
    video: {
      videoType: "youtube",
      url: "https://youtu.be/S_ssJVeTMbk"
    }
  },
  {
    id: "p2",
    type: "short",
    title: "0x100x Style Shorts",
    subtitle: "Showcase",
    tags: ["0x100x", "Saas"],
    video: {
      videoType: "youtube",
      url: "https://youtube.com/shorts/KkXUCn4DVl8"
    }
  },
  {
    id: "p3",
    type: "short",
    title: "Clean Minimalistic Shorts - V1",
    subtitle: "Showcase",
    tags: ["Clean", "Minimalistic"],
    video: {
      videoType: "youtube",
      url: "https://youtube.com/shorts/rVCylTgsTao"
    }
  },
  {
    id: "p4",
    type: "long",
    title: "Personal Instagram Outro",
    subtitle: "Showcase",
    tags: ["Instagram", "Outro", "Demo"],
    video: {
      videoType: "youtube",
      url: "https://youtu.be/eLAOuEJq36Y"
    }
  },
  {
    id: "p5",
    type: "short",
    title: "Clean Minimalistic Shorts - V2",
    subtitle: "Showcase",
    tags: ["Clean", "Minimalistic"],
    video: {
      videoType: "youtube",
      url: "https://youtube.com/shorts/TOkR5Zd57c4"
    }
  }
];
