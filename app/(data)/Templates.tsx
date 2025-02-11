export default [
  {
    name: "Blog title",
    desc: "An AI tool That Genrate Blog titale depends on your yout blog information  ",
    icon: 'blog-solid.svg',
    category: "Blog",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor formate ",
    slug: "genrate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your blog title",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool That serves as your personal blog post tital   ",
    icon: 'blog-solid.svg',
    category: "Blog",
    aiPrompt:
      "Genrate blog Content based on given outline and give me result in Rich text editor formate ",
    slug: "blog-content-generation",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool That Genrate Blog titale depends on your yout blog information  ",
    icon: 'bloghead.svg',
    category: "Blog",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor formate ",
    slug: "blog-topic-ideas",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool That Genrate Blog titale depends on your yout blog information  ",
    icon: 'youtube-color-svgrepo-com.svg',
    category: "Youtube",
    aiPrompt:
      "Give me best SEO optimized high ranked 5 title idea in bullet wise only based on given niche & outline and give me result in Rich text editor formate ",
    slug: "youtube-seo-title",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter Youtube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: 'Youtube Description',
    desc: 'An AI tool that generates YouTube descriptions based on your video information.',
    icon: 'ycont.svg', 
    category: "Youtube Tool",
    aiPrompt:
      "Generate a YouTube description using appropriate emojis if needed, under 4-5 lines, based on the given outline. Provide the result in Rich Text Editor format.",
    slug: 'youtube-description',
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube video outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: 'Youtube Tags',
    desc: 'An AI tool that generates YouTube tags based on your video information.',
    icon: 'hash-tag.svg', // Ensure the URL is valid
    category: "Youtube Tool",
    aiPrompt:
      "Generate 10 YouTube tags in bullet points based on the given outline. Provide the result in Rich Text Editor format.",
    slug: 'youtube-tags',
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube video outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: 'Text Improver',
    desc: 'This tool refines your writing, eliminates errors, and improves grammar.',
    icon: 'text-com.svg', // Ensure the URL is valid
    category: "Writing Assistant",
    aiPrompt:
      'Given the text, improve the grammar, spelling, punctuation, and other errors. Provide the result in Rich Text Editor format.',
    slug: 'text-improver',
    form: [
      {
        label: 'Enter the text that you want to improve',
        field: "textarea",
        name: "textToImprove",
        required: true, // Added required for better usability
      },
    ],
  },
  {
    name: 'Add Emoji to Text',
    desc: 'An AI tool that adds emojis to your text based on the context.',
    icon: 'emoji.svg', // Ensure the URL is valid
    category: "Blog",
    aiPrompt:
      'Add emojis to the provided text based on the context. Provide the result in Rich Text Editor format.',
    slug: 'add-emoji-to-text',
    form: [
      {
        label: 'Enter the text to add emojis',
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  
];
