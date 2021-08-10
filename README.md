## Internet Archive UX Component Catalog

[Browse the catalog](https://internetarchive.github.io/iaux-component-catalog)

### Running

```bash
> git clone https://github.com/internetarchive/iaux-component-catalog
> cd iaux-component-catalog
> npm install
> npm run storybook
```

### Contributing to the Catalog

1. Fork this repository
2. Clone your fork locally
3. Install your component dependency with `npm`. ie. `npm i @internetarchive/my-component`
4. Create a demo of your component:
   1. Copy an existing directory from inside the `stories` directory. The `ScrubberBar` is a fairly simple demo but there are other more complex ones to use as starting points.
   2. Rename your directory to match your component
   3. Update the `Overview.stories.mdx` file with info about your component
   4. Update the `.stories.ts` file with a demo of your component
5. Open a pull request into this repository
