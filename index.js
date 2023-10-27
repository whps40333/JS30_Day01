/**
 * 啟動聲音檔案
 *
 * @param {any} e
 * @returns
 */
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

// audio play

// function playSound(e){
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if(!audio)return;
//   audio.currentTime=0;
//   audio.play();
//   key.classList.add("playing")
// }
/**
 *
 *
 * @param {any} e
 * @returns
 */
function removeTransition(e) {
  // console.log(e.propertyName);
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

// // 移除css過渡效果

// function removeTransition(e){
//   if(e.propertyName!== "transform")return;
//   e.target.classList.remove("playing");
// }

/**
 * 移除樣式
 *
 * @param {any} e
 */
function removeClass(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.remove("playing");
}
// function removeClass(e){
//   const Key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   key.classList.remove("playing");
// }

// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeClass);
