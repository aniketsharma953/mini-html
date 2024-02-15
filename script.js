function Message() {
  alert("I love you!");
}
async function sharePage() {
  await navigator.share({
    title: document.title,
    url: window.location.href,
  });
}
