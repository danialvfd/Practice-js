const fruits0 = new Map([
    ["apples", 100],
    ["bananas", 200],
    ["oranges", 300]
  ]);

  // اضافه کردن المان یا تغییر مقدار با set
fruits0.set("apples", 500);
fruits0.set("bananas", 300);
fruits0.set("oranges", 200);


// size yek propery
console.log(fruits0.size);

// clear برای پاک کردن تمام المان ها
// برای حذف یک المان
// apple yek key hast
fruits0.delete("apples");

console.log(fruits0.size);

// چک کردن داشتن یک المان
console.log(fruits0.has("oranges"));
// item ham mitoone paramet va variable bashad    ***  soal mosahebe ***
fruits0.forEach(item => console.log("value: " , item.valueOf()));