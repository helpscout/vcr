export const cleanUp = () => {
  // Removes Wistia data
  window._wq = undefined
  // Removes Wistia script
  document.body.innerHTML = ''
}
