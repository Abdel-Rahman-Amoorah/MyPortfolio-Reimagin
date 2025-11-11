"use client"
import React from "react"

/**
 * Converts strings with <b> tags into JSX with styled spans
 */
export function parseRichText(text: string): React.ReactNode {
  // Split the string by <b>...</b> and keep track of which segments are highlighted
  const parts = text.split(/(<b>.*?<\/b>)/g)

  return parts.map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      const content = part.replace(/<\/?b>/g, "")
      return (
        <span key={index} className="text-primary font-semibold">
          {content}
        </span>
      )
    }
    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}
