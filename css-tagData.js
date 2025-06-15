// CSS Property Data - Comprehensive list of CSS properties organized by category
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
                { name: "overflow-x", description: "Horizontal overflow behavior" },
                { name: "overflow-y", description: "Vertical overflow behavior" },
                { name: "visibility", description: "Element visibility" },
                { name: "clip", description: "Clipping region for positioned elements" },
                { name: "clip-path", description: "Clipping path for elements" }
            ]
        },
        {
            name: "Flexbox Properties",
            description: "Properties for flexible box layout",
            tags: [
                { name: "flex", description: "Shorthand for flex properties" },
                { name: "flex-direction", description: "Direction of flex items" },
                { name: "flex-wrap", description: "Wrapping behavior of flex items" },
                { name: "flex-flow", description: "Shorthand for flex-direction and flex-wrap" },
                { name: "flex-grow", description: "Growth factor of flex item" },
                { name: "flex-shrink", description: "Shrink factor of flex item" },
                { name: "flex-basis", description: "Initial main size of flex item" },
                { name: "justify-content", description: "Alignment along main axis" },
                { name: "align-items", description: "Alignment along cross axis" },
                { name: "align-self", description: "Individual item alignment" },
                { name: "align-content", description: "Alignment of wrapped lines" },
                { name: "order", description: "Order of flex item" },
                { name: "gap", description: "Gap between flex items" }
            ]
        },
        {
            name: "Grid Properties",
            description: "Properties for CSS Grid layout",
            tags: [
                { name: "grid", description: "Shorthand for grid properties" },
                { name: "grid-template", description: "Shorthand for grid template properties" },
                { name: "grid-template-columns", description: "Column track sizes" },
                { name: "grid-template-rows", description: "Row track sizes" },
                { name: "grid-template-areas", description: "Named grid areas" },
                { name: "grid-auto-columns", description: "Size of auto-generated columns" },
                { name: "grid-auto-rows", description: "Size of auto-generated rows" },
                { name: "grid-auto-flow", description: "Auto-placement algorithm" },
                { name: "grid-column", description: "Grid column placement" },
                { name: "grid-row", description: "Grid row placement" },
                { name: "grid-area", description: "Grid area placement" },
                { name: "grid-column-start", description: "Column start line" },
                { name: "grid-column-end", description: "Column end line" },
                { name: "grid-row-start", description: "Row start line" },
                { name: "grid-row-end", description: "Row end line" },
                { name: "grid-gap", description: "Gap between grid items" },
                { name: "grid-column-gap", description: "Gap between columns" },
                { name: "grid-row-gap", description: "Gap between rows" },
                { name: "justify-items", description: "Default justification for grid items" },
                { name: "justify-self", description: "Individual item justification" },
                { name: "place-content", description: "Shorthand for align-content and justify-content" },
                { name: "place-items", description: "Shorthand for align-items and justify-items" },
                { name: "place-self", description: "Shorthand for align-self and justify-self" }
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
                { name: "margin-top", description: "Top margin" },
                { name: "margin-right", description: "Right margin" },
                { name: "margin-bottom", description: "Bottom margin" },
                { name: "margin-left", description: "Left margin" },
                { name: "margin-block", description: "Block-axis margin" },
                { name: "margin-inline", description: "Inline-axis margin" },
                { name: "padding", description: "Inner spacing" },
                { name: "padding-top", description: "Top padding" },
                { name: "padding-right", description: "Right padding" },
                { name: "padding-bottom", description: "Bottom padding" },
                { name: "padding-left", description: "Left padding" },
                { name: "box-sizing", description: "Box model calculation" }
            ]
        },
        {
            name: "Border Properties",
            description: "Properties for element borders",
            tags: [
                { name: "border", description: "Border shorthand" },
                { name: "border-width", description: "Border width" },
                { name: "border-style", description: "Border style" },
                { name: "border-color", description: "Border color" },
                { name: "border-top", description: "Top border" },
                { name: "border-right", description: "Right border" },
                { name: "border-bottom", description: "Bottom border" },
                { name: "border-left", description: "Left border" },
                { name: "border-radius", description: "Border radius" },
                { name: "border-top-left-radius", description: "Top-left border radius" },
                { name: "border-top-right-radius", description: "Top-right border radius" },
                { name: "border-bottom-left-radius", description: "Bottom-left border radius" },
                { name: "border-bottom-right-radius", description: "Bottom-right border radius" },
                { name: "border-image", description: "Border image" },
                { name: "border-collapse", description: "Border collapse for tables" },
                { name: "border-spacing", description: "Border spacing for tables" }
            ]
        },
        {
            name: "Typography Properties",
            description: "Properties for text styling and formatting",
            tags: [
                { name: "font", description: "Font shorthand" },
                { name: "font-family", description: "Font family" },
                { name: "font-size", description: "Font size" },
                { name: "font-weight", description: "Font weight" },
                { name: "font-style", description: "Font style" },
                { name: "font-variant", description: "Font variant" },
                { name: "font-stretch", description: "Font stretch" },
                { name: "font-size-adjust", description: "Font size adjustment" },
                { name: "font-kerning", description: "Font kerning" },
                { name: "font-feature-settings", description: "Font feature settings" },
                { name: "line-height", description: "Line height" },
                { name: "letter-spacing", description: "Letter spacing" },
                { name: "word-spacing", description: "Word spacing" },
                { name: "text-align", description: "Text alignment" },
                { name: "text-align-last", description: "Last line text alignment" },
                { name: "text-decoration", description: "Text decoration" },
                { name: "text-decoration-line", description: "Text decoration line" },
                { name: "text-decoration-color", description: "Text decoration color" },
                { name: "text-decoration-style", description: "Text decoration style" },
                { name: "text-indent", description: "Text indentation" },
                { name: "text-transform", description: "Text case transformation" },
                { name: "text-shadow", description: "Text shadow" },
                { name: "text-overflow", description: "Text overflow behavior" },
                { name: "white-space", description: "White space handling" },
                { name: "word-break", description: "Word breaking behavior" },
                { name: "word-wrap", description: "Word wrapping behavior" },
                { name: "hyphens", description: "Hyphenation" },
                { name: "vertical-align", description: "Vertical alignment" },
                { name: "direction", description: "Text direction" },
                { name: "unicode-bidi", description: "Unicode bidirectional algorithm" },
                { name: "writing-mode", description: "Writing mode" },
                { name: "tab-size", description: "Tab character size" },
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
                { name: "background-attachment", description: "Background attachment" },
                { name: "background-origin", description: "Background origin" },
                { name: "background-clip", description: "Background clipping" },
                { name: "background-blend-mode", description: "Background blend mode" },
                { name: "opacity", description: "Element opacity" },
                { name: "mix-blend-mode", description: "Element blend mode" },
                { name: "isolation", description: "Isolation for blend modes" }
            ]
        },
        {
            name: "Transform Properties",
            description: "Properties for transformations",
            tags: [
                { name: "transform", description: "Element transformation" },
                { name: "transform-origin", description: "Transform origin point" },
                { name: "transform-style", description: "Transform style for 3D" },
                { name: "perspective", description: "3D perspective" },
                { name: "perspective-origin", description: "3D perspective origin" },
                { name: "backface-visibility", description: "Backface visibility in 3D" },
                { name: "rotate", description: "Element rotation" },
                { name: "scale", description: "Element scaling" }
            ]
        },
        {
            name: "Animation Properties",
            description: "Properties for animations and transitions",
            tags: [
                { name: "animation", description: "Animation shorthand" },
                { name: "animation-name", description: "Animation name" },
                { name: "animation-duration", description: "Animation duration" },
                { name: "animation-timing-function", description: "Animation timing function" },
                { name: "animation-delay", description: "Animation delay" },
                { name: "animation-iteration-count", description: "Animation iteration count" },
                { name: "animation-direction", description: "Animation direction" },
                { name: "animation-fill-mode", description: "Animation fill mode" },
                { name: "animation-play-state", description: "Animation play state" },
                { name: "keyframes", description: "Keyframe rules" },
                { name: "transition", description: "Transition shorthand" },
                { name: "transition-property", description: "Transition property" },
                { name: "transition-duration", description: "Transition duration" },
                { name: "transition-timing-function", description: "Transition timing function" },
                { name: "transition-delay", description: "Transition delay" }
            ]
        },
        {
            name: "Visual Effects Properties",
            description: "Properties for visual effects",
            tags: [
                { name: "box-shadow", description: "Box shadow" },
                { name: "filter", description: "Visual filters" },
                { name: "backdrop-filter", description: "Backdrop filters" },
                { name: "mask", description: "Element masking" },
                { name: "shape-outside", description: "Shape for text wrapping" }
            ]
        },
        {
            name: "List Properties",
            description: "Properties for lists",
            tags: [
                { name: "list-style", description: "List style shorthand" },
                { name: "list-style-type", description: "List marker type" },
                { name: "list-style-position", description: "List marker position" },
                { name: "list-style-image", description: "Custom list marker image" }
            ]
        },
        {
            name: "Table Properties",
            description: "Properties for tables",
            tags: [
                { name: "table-layout", description: "Table layout algorithm" },
                { name: "caption-side", description: "Table caption position" },
                { name: "empty-cells", description: "Empty cell display" }
            ]
        },
        {
            name: "User Interface Properties",
            description: "Properties for user interface",
            tags: [
                { name: "cursor", description: "Mouse cursor style" },
                { name: "user-select", description: "User selection behavior" },
                { name: "pointer-events", description: "Pointer event handling" },
                { name: "resize", description: "Element resize behavior" },
                { name: "outline", description: "Outline shorthand" },
                { name: "outline-color", description: "Outline color" },
                { name: "outline-style", description: "Outline style" },
                { name: "outline-width", description: "Outline width" },
                { name: "outline-offset", description: "Outline offset" },
                { name: "caret-color", description: "Text input caret color" }
            ]
        },
        {
            name: "Content Properties",
            description: "Properties for content generation",
            tags: [
                { name: "object-fit", description: "Object fitting behavior" },
                { name: "object-position", description: "Object position" },
                { name: "image-rendering", description: "Image rendering quality" },
                { name: "will-change", description: "Performance optimization hint" },
                { name: "content", description: "Generated content" },
                { name: "counter-increment", description: "Counter increment" },
                { name: "counter-reset", description: "Counter reset" }
            ]
        },
        {
            name: "Page Layout Properties",
            description: "Properties for page layout and printing",
            tags: [
                { name: "page-break-before", description: "Page break before element" },
                { name: "page-break-after", description: "Page break after element" },
                { name: "page-break-inside", description: "Page break inside element" },
                { name: "break-before", description: "Break before element" },
                { name: "break-after", description: "Break after element" },
                { name: "break-inside", description: "Break inside element" },
                { name: "widows", description: "Minimum lines at page top" },
                { name: "orphans", description: "Minimum lines at page bottom" }
            ]
        },
        {
            name: "Multi-column Properties",
            description: "Properties for multi-column layout",
            tags: [
                { name: "columns", description: "Multi-column shorthand" },
                { name: "column-count", description: "Number of columns" },
                { name: "column-width", description: "Column width" },
                { name: "column-gap", description: "Gap between columns" },
                { name: "column-rule", description: "Column rule shorthand" },
                { name: "column-rule-width", description: "Column rule width" },
                { name: "column-rule-style", description: "Column rule style" },
                { name: "column-rule-color", description: "Column rule color" },
                { name: "column-span", description: "Column spanning" },
                { name: "column-fill", description: "Column filling behavior" }
            ]
        },
        {
            name: "Scroll Properties",
            description: "Properties for scrolling behavior",
            tags: [
                { name: "scroll-behavior", description: "Scrolling behavior" },
                { name: "scroll-margin", description: "Scroll margin" },
                { name: "scroll-padding", description: "Scroll padding" },
                { name: "overscroll-behavior", description: "Overscroll behavior" }
            ]
        },
        {
            name: "Global Properties",
            description: "Global CSS values and properties",
            tags: [
                { name: "zoom", description: "Element zoom level" },
                { name: "all", description: "Reset all properties" },
                { name: "inherit", description: "Inherit from parent" },
                { name: "initial", description: "Use initial value" },
                { name: "unset", description: "Unset to natural value" },
                { name: "revert", description: "Revert to user agent stylesheet" }
            ]
        }
    ]
};

// Log that data is loaded
console.log('CSS Tag Data loaded successfully:', tagData);
