# Sanity Repro

To reproduce error, run `npm i` and `npm run codegen`.

Here's the error log I'm currently getting:

```
✖ Error generating types for query "BLOG_PREVIEW" in "./queries/sanity/fragments/blogPreview.ts": Syntax error in GROQ query at position 4
✖ Error generating types for query "COLLECTION" in "./queries/sanity/fragments/collection.ts": Syntax error in GROQ query at position 4
✖ Error generating types for query "COLLECTION_GROUP" in "./queries/sanity/fragments/collectionGroup.ts": Syntax error in GROQ query at position 5
✖ Error generating types for query "COLOR_THEME" in "./queries/sanity/fragments/colorTheme.ts": Syntax error in GROQ query at position 32
✖ Error generating types for query "CUSTOM_PRODUCT_OPTIONS" in "./queries/sanity/fragments/customProductOptions.ts": Syntax error in GROQ query at position 5
✖ Error generating types for query "IMAGE" in "./queries/sanity/fragments/image.ts": Syntax error in GROQ query at position 2
✖ Error generating types for query "IMAGE_WITH_PRODUCT_HOTSPOTS" in "./queries/sanity/fragments/imageWithProductHotspots.ts": Syntax error in GROQ query at position 158
✖ Error generating types for query "LINK_EXTERNAL" in "./queries/sanity/fragments/linkExternal.ts": Syntax error in GROQ query at position 5
✖ Error generating types for query "LINK_INTERNAL" in "./queries/sanity/fragments/linkInternal.ts": Syntax error in GROQ query at position 5
✖ Error generating types for query "LINKS" in "./queries/sanity/fragments/links.ts": Syntax error in GROQ query at position 2
✖ Error generating types for query "BASE_MODULES" in "./queries/sanity/fragments/modules.ts": Syntax error in GROQ query at position 2
✖ Error generating types for query "MODULES" in "./queries/sanity/fragments/modules.ts": Syntax error in GROQ query at position 4
✖ Error generating types for query "PRODUCT_HOTSPOT" in "./queries/sanity/fragments/productHotspot.ts": Syntax error in GROQ query at position 5
✖ Error generating types for query "SEO" in "./queries/sanity/fragments/seo.ts": Syntax error in GROQ query at position 6
✖ Error generating types for query "SEO_SHOPIFY" in "./queries/sanity/fragments/seoShopify.ts": Syntax error in GROQ query at position 6
⚠ Encountered errors in 15 files while generating types
✔ Generated TypeScript types for 130 schema types and 1 GROQ queries in 1 files into: index.generated.ts
```
