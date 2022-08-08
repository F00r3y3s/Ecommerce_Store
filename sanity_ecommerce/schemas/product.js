export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxlength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },

    {
      name: "brand",
      title: "Brand",
      type: "string",
    },

    {
      name: "rating",
      title: "Rating",
      type: "number",
    },

    {
      name: "numReviews",
      title: "NumReviews",
      type: "number",
    },

    {
      name: "countInStock",
      title: "CountInStock",
      type: "number",
    },
  ],
};
