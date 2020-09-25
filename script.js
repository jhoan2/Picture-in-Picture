const button = document.getElementById('button');
const videoElement = document.getElementById('video');


async function selectMediaStream() {  
    try {
        const mediaStream =  await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(err) {
      console.error("Error: " + err);
    }
  }

button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On Load 
selectMediaStream();