// Orient the information box
function setContainerOrientation() {
	orientationSheet = document.getElementById("screenOrientation");

	if (screen.orientation.type == "portrait-primary") {
		orientationSheet.href = "/assets/styles/portrait.css";
	} else {
		orientationSheet.href = "/assets/styles/landscape.css";
	}
}

setContainerOrientation();
