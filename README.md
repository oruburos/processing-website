# Processing Website

This repo holds the code for the [processing.org](https://processing.org) website. The website is built with [Gatsby](https://www.gatsbyjs.com/).

## Running the site locally

To run the site locally, make sure that you have Node.js installed (`v12` minimum).

1. Clone down this repo and `cd` into the folder via the command-line
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to run the development server

Now open [localhost:8000](http://localhost:8000) in your browser of choice.

## Editing content

In order to edit the content on the website, it's important to understand how the translation and internationalization frameworks are set up. For this, we distinguish between two things:

### UI language

This content is more static, such as page headings and the descriptions on the front page. This is controlled by the `react-intl` package, and all definitions of UI language can be found in the [`i18n/react-intl`](/i18n/react-intl) folder. Each language will have its own `.json` file in this folder, and this is where edits to the UI language should happen.

### Page content

This content includes most of the content on the website such as the individual items under reference, tutorials, tools, etc. Each content type has its own setup based on where the source lives. As an example, the reference is generated from the Processing source code and has its own way of translating those generated files. The following guides explain how to change the content on the website by section.

- [Download](/docs/download.md)
- Documentation
  - [Reference](/docs/reference.md)
  - [Environment](/docs/markdown-pages.md)
  - [Libraries](/docs/libraries.md)
  - [Tools](/docs/tools.md)
- Learn
  - [Tutorials](/docs/tutorials.md)
  - [Examples](/docs/examples.md)
  - [Books](/docs/books.md)
- Teach (External link)
- [About](/docs/markdown-pages.md)
- Donate (External link)

## Translations
When translating the content to a new language you need to edit the [`i18n/config.json`](/i18n/config.json) file and add you language information. Then follow the instructions for each Content list (same links as above).
For specific details check the guidelines - [Translation](/docs/translations.md)

## Writing code

- [Writing CSS](/docs/css.md)

## Deploying the site

The website is set up to deploy itself whenever a new GitHub release is created from the `master` branch:

1. Go to [Releases](https://github.com/processing/processing-website/releases)
2. Click "Create a new release"
3. Choose a tag for this release. This value is not used for much, so you can just use `DD-MM-YYYY`
4. Create the release. A GitHub action will run, which will build the website and upload to the S3 bucket.

## `keywords.txt`

The website repo has a script that generates the `keywords.txt` file into the `processing4` repo to use for syntax highlighting the PDE. Follow these steps in order to generate that file:

1. Make sure you have this `processing-website` repo and the `processing4` repo next to each other on your computer
2. Run `npm run updateKeywords`

The `processing4` repo now has an updated `java/keywords.txt` file.
