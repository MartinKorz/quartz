import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🔻 mart's blog",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "martinkorz.github.io/quartz/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Arial",
        body: "Arial",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f3e9e0",
          lightgray: "#cccccc",
          gray: "#bbbbbb",
          darkgray: "#333333",
          dark: "#2b2b2b",
          secondary: "#600053",
          tertiary: "#5544ad",
          highlight: "rgba(255, 255, 255, 0.3)",
        },
        darkMode: {
          light: "#101000",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#aaaaaa",
          dark: "#cccccc",
          secondary: "#c06050",
          tertiary: "#709080",
          highlight: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
