// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const image = urlParams.get('image');
const name = urlParams.get('name');
const info = urlParams.get('info');

// Update the team member details on the page
const teamMemberImage = document.getElementById('team-member-image');
const teamMemberName = document.getElementById('team-member-name');
const teamMemberInfo = document.getElementById('team-member-info');

teamMemberImage.src = image;
teamMemberImage.alt = name;
teamMemberName.textContent = name;
teamMemberInfo.textContent = info;