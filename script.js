let toastBox = document.getElementById("toastBox");
let successMsg =
  ' <i class="fa-solid fa-square-check"></i> SuccessFully Submitted!';
let errMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Please Fix The Error!';
let invalidMsg =
  '<i class="fa-solid fa-triangle-exclamation"></i>Invalid Input, Check Again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
}
