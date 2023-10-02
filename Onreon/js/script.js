// store click
const store = document.querySelectorAll(".store");
store.forEach((store) => {
  // müşteri detayı açılımı
  store.addEventListener("click", event => {
    store.classList.toggle("active");
    if (store.classList.contains("active")) {
      const customer_list = document.querySelector(".customer-list");
      customer_list.style.display = "flex";
      customer_list.style.maxHeight = "max-content";

      // mesaj detyaları
      const notElements = store.querySelectorAll(".not");
      notElements.forEach((not) => {
        not.style.visibility = not.style.visibility === "hidden" ? "visible" : "hidden";
      });
    }
  });
});


// messages detail
function messageClick(customer1) {
  var secilenID = document.getElementById(customer1);
  if (secilenID.style.display == "none") {
    secilenID.style.display = "block";
  } else {
    secilenID.style.display = "none";
  }
}


// görsel yükleme butonu
const fileUpload = document.getElementById('file-upload');
fileUpload.addEventListener('change', (e) => {
  const files = e.target.files;
});




