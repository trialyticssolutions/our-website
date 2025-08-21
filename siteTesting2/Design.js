{
  "designSystem": {
    "name": "Surfio-Inspired Design System",
    "description": "A design system profile derived from the visual characteristics of the provided Surfio desktop screenshot, focusing on a clean, modern, and friendly aesthetic with clear information hierarchy.",
    "styleGuidelines": {
      "colorPalette": {
        "primary": "#007bff",
        "secondary": "#6c757d",
        "accentColors": [
          {"name": "Light Blue", "hex": "#e0f7fa"},
          {"name": "Light Pink", "hex": "#ffebee"},
          {"name": "Light Yellow", "hex": "#fffde7"},
          {"name": "Dark Teal", "hex": "#004d40"}
        ],
        "neutralColors": {
          "background": "#f8f9fa",
          "textDark": "#212529",
          "textLight": "#f8f9fa",
          "border": "#dee2e6"
        },
        "usageNotes": "Predominantly light backgrounds with vibrant, pastel-like accent sections. Dark text for readability, light text for contrasting backgrounds."
      },
      "typography": {
        "fontFamily": "'Inter', sans-serif",
        "headings": {
          "h1": {"fontSize": "2.5rem", "fontWeight": "700", "lineHeight": "1.2"},
          "h2": {"fontSize": "2rem", "fontWeight": "600", "lineHeight": "1.3"},
          "h3": {"fontSize": "1.75rem", "fontWeight": "600", "lineHeight": "1.4"},
          "h4": {"fontSize": "1.5rem", "fontWeight": "500", "lineHeight": "1.5"}
        },
        "bodyText": {
          "base": {"fontSize": "1rem", "fontWeight": "400", "lineHeight": "1.6", "color": "#343a40"},
          "small": {"fontSize": "0.875rem", "fontWeight": "400", "lineHeight": "1.5", "color": "#6c757d"}
        },
        "links": {
          "color": "#007bff",
          "hoverColor": "#0056b3",
          "textDecoration": "none"
        },
        "usageNotes": "Clean, sans-serif typography. Headings are bold and prominent. Body text is legible with good line height. Consistent use of text sizes for hierarchy."
      },
      "spacing": {
        "baseUnit": "1rem",
        "padding": {
          "small": "0.5rem",
          "medium": "1rem",
          "large": "2rem",
          "sectionVertical": "4rem",
          "sectionHorizontal": "2rem"
        },
        "margin": {
          "small": "0.5rem",
          "medium": "1rem",
          "large": "2rem"
        },
        "gap": {
          "small": "0.5rem",
          "medium": "1rem",
          "large": "2rem"
        },
        "usageNotes": "Generous use of white space for clarity. Consistent vertical and horizontal spacing within and between sections. Elements within components have tight but clear spacing."
      },
      "borderRadii": {
        "small": "0.25rem",
        "medium": "0.5rem",
        "large": "0.75rem",
        "full": "9999px",
        "usageNotes": "Subtle rounded corners on most interactive elements and containers, contributing to a softer, friendly feel."
      },
      "shadows": {
        "light": "0 2px 4px rgba(0, 0, 0, 0.05)",
        "medium": "0 4px 8px rgba(0, 0, 0, 0.1)",
        "usageNotes": "Minimal use of subtle box shadows, primarily for cards or elevated elements to provide slight depth without distraction."
      }
    },
    "componentStyles": {
      "buttons": {
        "primary": {
          "backgroundColor": "#007bff",
          "textColor": "#ffffff",
          "borderColor": "#007bff",
          "borderRadius": "0.375rem",
          "padding": "0.75rem 1.5rem",
          "fontWeight": "600",
          "hoverEffect": "darken background, slight scale"
        },
        "secondary": {
          "backgroundColor": "transparent",
          "textColor": "#007bff",
          "borderColor": "#007bff",
          "borderRadius": "0.375rem",
          "padding": "0.75rem 1.5rem",
          "fontWeight": "600",
          "hoverEffect": "lighten background, slight scale"
        },
        "usageNotes": "Clear call-to-action buttons with distinct primary and secondary styles. Consistent padding and rounded corners."
      },
      "inputFields": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ced4da",
        "borderRadius": "0.375rem",
        "padding": "0.75rem 1rem",
        "textColor": "#495057",
        "focusEffect": "blue border highlight, subtle shadow",
        "usageNotes": "Clean, simple input fields with a clear border and subtle focus state."
      },
      "cards": {
        "backgroundColor": "#ffffff",
        "borderRadius": "0.75rem",
        "padding": "2rem",
        "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.05)",
        "usageNotes": "Used for grouping related content, often with a white background and subtle shadow."
      },
      "navigation": {
        "header": {
          "backgroundColor": "#ffffff",
          "textColor": "#212529",
          "height": "4rem",
          "padding": "0 2rem",
          "alignment": "space-between",
          "links": {"fontWeight": "500", "spacing": "1.5rem"}
        },
        "footer": {
          "backgroundColor": "#004d40",
          "textColor": "#e0f7fa",
          "padding": "4rem 2rem",
          "links": {"color": "#e0f7fa", "hoverColor": "#ffffff", "spacing": "1rem"}
        },
        "usageNotes": "Clear, minimalist header with prominent branding and navigation links. Dark, information-rich footer with light text."
      }
    },
    "layoutStructure": {
      "gridSystem": {
        "columns": "12",
        "gutterWidth": "1.5rem",
        "responsiveBreakpoints": {
          "sm": "576px",
          "md": "768px",
          "lg": "992px",
          "xl": "1200px"
        },
        "usageNotes": "Content is organized into a flexible grid, adapting to different screen sizes. Sections often use full-width backgrounds with content constrained to a central column."
      },
      "sectionLayouts": [
        {"type": "Hero", "description": "Full-width banner with large heading, subtext, and call-to-action, often with an image or illustration."},
        {"type": "Feature Grid", "description": "Multiple columns (e.g., 2, 3, or 4) displaying distinct features, each with an icon/image, title, and description."},
        {"type": "Testimonial/Quote", "description": "Centralized text block, often with an avatar and name, highlighting user feedback."},
        {"type": "Form Section", "description": "Dedicated section for input fields and buttons, often with a distinct background color."},
        {"type": "Content Block (Text + Image)", "description": "Alternating layouts of text on one side and an image/illustration on the other, often flipping sides in subsequent blocks."},
        {"type": "Call to Action", "description": "Prominent section with a clear message and button(s) to guide user action."}
      ],
      "responsiveness": "Fluid layouts with elements resizing and re-stacking vertically on smaller screens. Typography and spacing adjust proportionally.",
      "informationHierarchy": "Clear visual hierarchy achieved through varying font sizes, weights, color contrast, and strategic use of white space. Important elements are larger and more prominent."
    }
  }
}
