
const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream(displayMediaOptions) {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = function() {

      videoElement.play();
    };

  } catch (error) {
    console.log("There is a mistake mate");
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// on load
selectMediaStream();
