```javascript
document.addEventListener("DOMContentLoaded", function () {
    const tahun = document.getElementById("tahun");

    if (tahun) {
        tahun.textContent = new Date().getFullYear();
    }
});
```
