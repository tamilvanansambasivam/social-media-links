import React from "react";

export default function SocialLink({
  linkname = "example",
  linkUrl = "https://example.com/",
  className,
}) {
  return (
    <a href={linkUrl} target="_blank" className={className}>
      {linkname}
    </a>
  );
}
