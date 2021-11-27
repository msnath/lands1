const toast = document.getElementsByClassName("sms-toast")[0];
const toastCheck = document.getElementById("sms-toast__icon-check");
const toastCross = document.getElementById("sms-toast__icon-cross");
const toastText = document.getElementsByClassName("sms-toast__text")[0];
const resetToast = (icon) => {
  toast.classList.remove("sms-toast--visible");
  const resetToastValues = () => {
    toastText.innerHTML = "";
    icon.classList.add("sms-toast__icon--hidden");
    icon.classList.remove("sms-toast__icon--visible");
  }
  setTimeout(resetToastValues, 300);
}
const onShowToast = (success, toastMessage) => {
  const icon = success ? toastCheck : toastCross;
  toastText.innerHTML = toastMessage;
  icon.classList.add("sms-toast__icon--visible");
  icon.classList.remove("sms-toast__icon--hidden");
  toast.classList.add("sms-toast--visible");
  setTimeout(() => resetToast(icon), 3000);
}
const email = document.getElementById("sms-footer__form-email");
const onSubscribe = async (event) => {
  event.preventDefault();
  try {
    const reqBody = {
      email: email.value
    };
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      ,
      body: JSON.stringify(reqBody)
    }
    const resRaw = await fetch("/api/subscribe", options);
    const resJson = await resRaw.json();
    if (resJson.success) 
      onShowToast(true, resJson.response);
    else 
      onShowToast(false, resJson.response);
  }
  catch (err) {
    onShowToast(false, "Oops! An error occurred.")
  }
  return false;
}
