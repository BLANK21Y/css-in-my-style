// CSS Property Data
const tagData = {
  categories: [
    {
      name: "Layout Properties",
      description: "Properties for positioning and layout",
      tags: [
        { name: "display", description: "Display type of element" },
        { name: "position", description: "Positioning method" },
        { name: "top", description: "Top offset for positioned elements" },
        { name: "right", description: "Right offset for positioned elements" },
        { name: "bottom", description: "Bottom offset for positioned elements" },
        { name: "left", description: "Left offset for positioned elements" },
        { name: "float", description: "Floating behavior" },
        { name: "clear", description: "Clear floating elements" },
        { name: "z-index", description: "Stacking order" },
        { name: "overflow", description: "Content overflow behavior" },
        { name: "visibility", description: "Element visibility" }
      ]
    },
    {
      name: "Flexbox Properties",
      description: "Properties for flexible box layout",
      tags: [
        { name: "flex", description: "Shorthand for flex properties" },
        { name: "flex-direction", description: "Direction of flex items" },
        { name: "flex-wrap", description: "Wrapping behavior of flex items" },
        { name: "justify-content", description: "Alignment along main axis" },
        { name: "align-items", description: "Alignment along cross axis" },
        { name: "align-self", description: "Individual item alignment" },
        { name: "flex-grow", description: "Growth factor of flex item" },
        { name: "flex-shrink", description: "Shrink factor of flex item" },
        { name: "order", description: "Order of flex item" },
        { name: "gap", description: "Gap between flex items" }
      ]
    },
    {
      name: "Grid Properties",
      description: "Properties for CSS Grid layout",
      tags: [
        { name: "grid", description: "Shorthand for grid properties" },
        { name: "grid-template-columns", description: "Column track sizes" },
        { name: "grid-template-rows", description: "Row track sizes" },
        { name: "grid-template-areas", description: "Named grid areas" },
        { name: "grid-column", description: "Grid column placement" },
        { name: "grid-row", description: "Grid row placement" },
        { name: "grid-area", description: "Grid area placement" },
        { name: "grid-gap", description: "Gap between grid items" },
        { name: "justify-items", description: "Default justification for grid items" },
        { name: "align-content", description: "Alignment of wrapped lines" }
      ]
    },
    {
      name: "Box Model Properties",
      description: "Properties for element dimensions and spacing",
      tags: [
        { name: "width", description: "Element width" },
        { name: "height", description: "Element height" },
        { name: "min-width", description: "Minimum width" },
        { name: "max-width", description: "Maximum width" },
        { name: "min-height", description: "Minimum height" },
        { name: "max-height", description: "Maximum height" },
        { name: "margin", description: "Outer spacing" },
        { name: "padding", description: "Inner spacing" },
        { name: "box-sizing", description: "Box model calculation" }
      ]
    },
    {
      name: "Typography Properties",
      description: "Properties for text styling and formatting",
      tags: [
        { name: "font-family", description: "Font family" },
        { name: "font-size", description: "Font size" },
        { name: "font-weight", description: "Font weight" },
        { name: "font-style", description: "Font style" },
        { name: "line-height", description: "Line height" },
        { name: "letter-spacing", description: "Letter spacing" },
        { name: "text-align", description: "Text alignment" },
        { name: "text-decoration", description: "Text decoration" },
        { name: "text-transform", description: "Text case transformation" },
        { name: "color", description: "Text color" }
      ]
    },
    {
      name: "Background Properties",
      description: "Properties for backgrounds",
      tags: [
        { name: "background", description: "Background shorthand" },
        { name: "background-color", description: "Background color" },
        { name: "background-image", description: "Background image" },
        { name: "background-repeat", description: "Background repeat" },
        { name: "background-position", description: "Background position" },
        { name: "background-size", description: "Background size" },
        { name: "opacity", description: "Element opacity" }
      ]
    }
  ]
};

// Immediately log that data is loaded
console.log('Tag data loaded:', tagData);
