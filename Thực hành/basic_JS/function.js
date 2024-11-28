// Hàm tính tổng dãy số S = 0 + 2 + 4 + ... + n

function calculateSum(n) {
  if (n < 0 || !Number.isInteger(n)) {
      console.log("Nhập một số nguyên dương!");
      return;
  }

  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
      sum += i;
  }

  const isDivisibleByFive = (sum % 5 === 0);

  console.log(`Tổng dãy số S là: ${sum}`);
  console.log(`Tổng này ${isDivisibleByFive ? "chia hết" : "không chia hết"} cho 5.`);
}

calculateSum(100); // Giá trị muốn kiểm tra
