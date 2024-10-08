const fruits = new Map([
    ["apples", 100],
    ["bananas", 200],
    ["oranges", 300]
  ]);

  // اضافه کردن المان یا تغییر مقدار با set
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

document.getElementById("fruits").innerHTML = fruits.get("apples");

console.log(fruits.size);

// clear برای پاک کردن تمام المان ها
// برای حذف یک المان
fruits.delete("apples");

console.log(fruits.size);

// چک کردن داشتن یک المان
console.log(fruits.has("oranges"));