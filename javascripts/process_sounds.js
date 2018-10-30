async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

async function setupSamples(audioCtx, filePaths) {
  const samples = [];

  filePaths.forEach( filePath => {
    let sample = await getFile(audioCtx, filePath);
    samples.push(sample);
  })


  const sample = await getFile(audioCtx, filePath);
  return sample;
}