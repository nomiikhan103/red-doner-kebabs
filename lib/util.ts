export function filterHTML(value: string) {
  // Remove HTML tags
  let filteredValue = value.replace(/(<([^>]+)>)/g, "");

  // Replace &nbsp; with a space
  filteredValue = filteredValue.replace(/&nbsp;/g, " ");

  // Replace &amp; with &
  filteredValue = filteredValue.replace(/&amp;/g, "&");

  // spaces before heading
  filteredValue = filteredValue.replace(/\s*<(h[1-6])>/gi, "<$1>");

  // Check if the length is greater than 50
  if (filteredValue.length > 50) {
    // Truncate to 50 characters and add "..."
    filteredValue = filteredValue.substring(0, 47) + "..."; // Adjusted to fit "..."
  }

  return filteredValue;
}
