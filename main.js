const unreadNotifications = document.querySelectorAll(".unread")
const readAllBtn = document.querySelector(".btn")
const notificationCount = document.querySelector(".count")
const redDots = document.querySelectorAll(".unread .notification .body")

readAllBtn.addEventListener("click", () => {
  unreadNotifications.forEach((unread) => {
    unread.style.backgroundColor = "hsl(0, 0%, 100%)"
    unread.classList.add("selected-after")
  })
  notificationCount.innerHTML = "0"
})

unreadNotifications.forEach((unread) => {
  unread.addEventListener("click", () => {
    unread.style.backgroundColor = "hsl(0, 0%, 100%)"
    unread.classList.add("selected-after")
    notificationCount.innerHTML = notificationCount.innerHTML - 1
  })
})
